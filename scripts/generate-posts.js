import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../posts");
const OUTPUT_FILE = path.join(__dirname, "../posts.json");
const CHECK_ONLY = process.argv.includes("--check");

function toDateString(value, file) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date in ${file}: ${value}`);
  }
  return date.toISOString().slice(0, 10);
}

function normalizeTags(tags) {
  if (!Array.isArray(tags)) return [];
  return tags
    .filter((tag) => typeof tag === "string")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function generatePosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    throw new Error(`Posts directory not found: ${POSTS_DIR}`);
  }

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(content);

    const missing = ["title", "description", "date"].filter((key) => !data[key]);
    if (missing.length > 0) {
      throw new Error(`Missing frontmatter (${missing.join(", ")}): ${file}`);
    }

    return {
      slug: path.basename(file, ".md"),
      title: String(data.title),
      description: String(data.description),
      author: data.author || "Unknown Author",
      date: toDateString(data.date, file),
      category: data.category || "General",
      tags: normalizeTags(data.tags),
      published: data.published === true,
      featured: data.featured === true,
      ...(data.coverImage ? { coverImage: data.coverImage } : {}),
    };
  });

  posts.sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug)
  );

  if (CHECK_ONLY) {
    console.log(`Validated ${posts.length} posts.`);
    return;
  }

  const output = JSON.stringify(posts, null, 2) + "\n";
  const existing = fs.existsSync(OUTPUT_FILE)
    ? fs.readFileSync(OUTPUT_FILE, "utf8")
    : null;

  if (existing === output) {
    console.log("posts.json is already up to date.");
    return;
  }

  fs.writeFileSync(OUTPUT_FILE, output, "utf8");
  console.log(`Generated posts.json with ${posts.length} posts.`);
}

try {
  generatePosts();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}