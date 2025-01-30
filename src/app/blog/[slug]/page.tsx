import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import SocialShare from "../../components/SocialShare";
import type { Metadata } from "next";

// 静的生成対象のパス一覧を返す
// ❌ { params: { slug: string } }[] は不要
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  // 例: [{ slug: "post1" }, { slug: "post2" }, ... ]
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

// メタデータを動的に生成
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description || "A blog post from my portfolio site",
  };
}

// ブログ記事のページ本体
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-white">{data.title}</h1>
      <p className="text-gray-400 mt-2">{data.date}</p>

      <SocialShare title={data.title} />

      <div className="mt-8 text-white">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
