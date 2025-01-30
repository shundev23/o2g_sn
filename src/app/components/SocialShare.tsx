"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SocialShare = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const shareUrl = `https://your-domain.com${pathname}`;

  const socialLinks = [
    {
      name: "X",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      icon: "/icons/x.svg",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: "/icons/facebook.svg",
    },
    {
      name: "はてなブックマーク",
      url: `https://b.hatena.ne.jp/entry/${encodeURIComponent(shareUrl)}`,
      icon: "/icons/hatena.svg",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`,
      icon: "/icons/linkedin.svg",
    }
  ];

  return (
    <div className="mt-6 flex space-x-4">
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          <Image src={social.icon} alt={social.name} width={24} height={24} />
          <span className="text-white text-sm"></span>
        </a>
      ))}
    </div>
  );
};

export default SocialShare;
