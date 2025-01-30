import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const getBlogPosts = () => {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));

  return files.map((filename, index) => {
    const fileContent = fs.readFileSync(path.join("content/blog", filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      id: index + 1,
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 新しい順にソート
};

export default function Blog() {
  const blogs = getBlogPosts();

  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      {/* Blogタイトル */}
      <h1 className="text-4xl font-bold text-black">Blog</h1>
      <p className="text-gray-400 mt-2">{blogs.length} posts so far. Stay tuned for more!</p>

      {/* 記事一覧 */}
      <ul className="mt-8 space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400 text-sm">{blog.date}</span>
            <Link href={`/blog/${blog.slug}`} className="text-black hover:text-gray-300 transition text-right">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
