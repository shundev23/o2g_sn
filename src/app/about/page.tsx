import Image from "next/image";
import Link from "next/link";
import PhotoSlider from "../components/PhotoSlider";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-6 space-y-12">
      {/* 写真セクション */}
      <section className="max-w-4xl mx-auto">
  <h1 className="text-4xl font-bold text-black">My gallery</h1>
  <div className="mt-6 flex justify-center">
    <div className="w-full max-w-3xl">
      <PhotoSlider />
    </div>
  </div>
</section>

      {/* 自己紹介 */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-black">About me</h2>
        <p className="text-lg text-gray-400 mt-4">
        I work as a software developer in Tokyo.  
        In my personal projects, I mainly develop iOS apps.  
        I&apos;m passionate about Golang, so I&apos;m deeply engaged in building products with it.  
        My hobbies include taking photos with my Leica Q and exploring the outdoors.  
        Looking forward to connecting with you!
        </p>
      </section>

      {/* SNSリンク */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-black">Follow Me</h2>
        <div className="flex justify-center space-x-6 mt-4">
        <Link href="https://github.com/shundev23" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} />
          </Link>
          <Link href="https://www.instagram.com/o2g_sn/" target="_blank">
            <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
          </Link>
          <Link href="https://zenn.dev/nihiru" target="_blank">
            <Image src="/icons/zenn.svg" alt="Zenn" width={40} height={40} />
          </Link>
        </div>
      </section>
    </div>
  );
}
