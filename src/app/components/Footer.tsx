import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-black">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="https://github.com/shundev23" target="_blank">
          <Image src="/icons/github.svg" alt="GitHub" width={30} height={30} />
        </Link>
        <Link href="https://www.instagram.com/o2g_sn/" target="_blank">
          <Image src="/icons/instagram.svg" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href="https://zenn.dev/nihiru" target="_blank">
          <Image src="/icons/zenn.svg" alt="Zenn" width={30} height={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
