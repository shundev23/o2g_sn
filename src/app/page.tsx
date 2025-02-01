import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-6 space-y-12">
      {/* メッセージ */}
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">Welcome to my web site</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          I&apos;m a software developer based in Japan.  
          I love crafting web applications and exploring new technologies.  
          Beyond coding, I have a deep passion for photography, capturing moments that inspire me.  

          <br /><br />
          This site showcases my work, thoughts, and the tools I use.
          Feel free to explore and connect with me!
        </p>
      </section>

      {/* プロダクト一覧 */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-black">Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* プロダクトカード */}
          <div className="relative bg-gray-800 p-6 rounded-xl shadow-md h-64">
            <Image
              src="/images/logo.png"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl opacity-50"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 rounded-b-xl">
              <h3 className="text-lg font-semibold text-white">Somni</h3>
            </div>
            <p className="text-gray-400 mt-2"></p>
          </div>
        </div>
      </section>
    </div>
  );
}
