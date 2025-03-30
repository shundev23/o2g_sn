// components/Footer.tsx
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white-900 text-black py-8 mt-16">
      <div className="container mx-auto flex flex-col items-center text-center md:text-left md:flex-row md:justify-center">
        <Image
          src="/images/icon.jpeg"
          alt="Profile Picture"
          width={250} 
          height={250}
          className="rounded-2xl shadow-lg"
          style={{ borderRadius: '16px' }}
        />

        <div className="mt-4 md:mt-0 md:ml-4">
          <p className="text-black text-sm max-w-md">
          I work as a software developer.  
          Occasionally, I share my work as a photographer on social media, mainly focusing on street photography.  
          I go to the gym to stay in shape and not let aging get the best of me.  
          I&apos;m a casual Arsenal fan—I watch the Premier League from time to time.
          </p>

          <div className="mt-2 flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/shundev23" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/4hns1/" target="_blank">
            <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
          </a>
          <a href="https://zenn.dev/nihiru" target="_blank">
            <Image src="/icons/zenn.svg" alt="Zenn" width={40} height={40} />
          </a>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <p className="mt-6 text-xs text-gray-500 text-center">© 2025 o2g. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
