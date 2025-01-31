import Image from "next/image";
import Link from "next/link";

const gearList = [
  {
    category: "",
    items: [
      {
        name: "Leica Q",
        description: "My main camera",
        image: "/images/Q343front_600x.webp",
        link: "https://store.leica-camera.jp/category/camera_q",
      },
      {
        name: "Battery Charger for Leica Q",
        description: "This is a charger that can be used to charge the batteries of Leica Q and Leica CL. Please note that a USB cable and AC adapter are required separately.",
        image: "/images/0604121325_665e865520a32.jpeg",
        link: "https://store.leica-camera.jp/products/detail/2463",
      },
      {
        name: "MacBook Pro M1 Pro 14-inch 16GB/1TB",
        description: "Daily driver. Sleek, great display, and performant.",
        image: "/images/61cCf94xIEL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/Apple-MacBook-14-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQWSQK7/ref=sr_1_3?crid=37YSJ8L0K6J8T&dib=eyJ2IjoiMSJ9.DZMfSl9WywSWAn2I8uUy40bkHj3MZwf0Q8d2VEj84X88C_xAVoJjs2evMx_pq5LPCozVZ4T3RWpAx8l2ex8vP5jcd8MwxWWFardOrW3XeAZrzuHx9Gh4D9OLO3g4h38xnbUeWPJFlC8DV_cPFLyYC3TTwBYuw60FW-PpMDrIZXnSyPth8OCDiEPnJ8bb9EvCl6MheXP8eOIjkuYqxGSUHMmbbnJ4Wul_fIiq1hP_upY.qtarvh2soXPVtMpKtQHXrx75nEXfWe65aRRS-jvFO2A&dib_tag=se&keywords=m1%2Bpro%2Bmacbook%2Bpro%2B14&qid=1738204291&sprefix=m1%2Bpro%2Bmacbook%2Bpro%2B14%2Caps%2C278&sr=8-3&th=1",
      },
      {
        name: "Apple AirPods Pro",
        description: "Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency.",
        image: "/images/airpods__ea3kvnhxv96q_large_2x.jpg",
        link: "https://www.apple.com/jp/airpods-pro/",
      },
      {
        name: "Apple Watch Series 5",
        description: "",
        image: "/images/Apple_watch_series_5-workout-outdoor-run-elevation-open-goal-screen-091019_carousel.jpg.large.jpg",
        link: "https://support.apple.com/ja-jp/118453",
      },
      {
        name: "Logicool Web Camera C920n",
        description: "Logitech C920n Webcam Full HD 1080P Streaming Autofocus Stereo Microphone, Black, Webcam, PC, Mac, Laptop, Zoom Skype, Domestic Authentic Product (Amazon.co.jp Exclusive Wallpaper Download)",
        image: "/images/61FLOm0OiLL._AC_SL1500_.jpg",
        link: "https://amzn.asia/d/6WDYl0Z",
      },
      {
        name: "FlexiSpot EC9",
        description: "FlexiSpot EC9WM Standing Desk, Easy Assembly, Electric Desk, Adjustable Height, Ergonomic, Gaming Desk, Computer Desk Set (Black Legs + Maple Tabletop, E9)",
        image: "/images/51uRuRLXiSL._AC_SL1500_.jpg",
        link: "https://www.amazon.co.jp/dp/B09BCD9P8P?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      },
      {
        name: "Anker USB 3.0 Ultra Slim 4 Port Hub USB",
        description: "Anker USB 3.0 Ultra Slim 4 Port Hub USB Hub 60cm Cable 5Gbps High Speed Transfer Bus Power Lightweight Compact Compatible with MacBook/iMac/Surface Pro and More Laptops and More USB Hub, Telework",
        image: "/images/51qlQdrQQQS._AC_SL1500_.jpg",
        link: "https://www.amazon.co.jp/dp/B07ST84PF5?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      },
      {
        name: "WAVLINK USB 3.0A/type-C Dual HDMI Adapter",
        description: "WAVLINK USB 3.0A/type-C Dual HDMI Adapter, 2K Output, Mini Docking Station / Largest 4K (3840x2160 @ 30Hz Display Output/1x1440P, Supports HDMI Output Port/1x1080P), 1x USB 3.0 Port, Windows",
        image: "/images/71o+ARnNfxL._AC_SL1500_.jpg",
        link: "https://www.amazon.co.jp/dp/B094N7D56H?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      },
      {
        name : "Logitech M575S Wireless Mouse",
        description : "Logitech M575S Wireless Trackball Mouse, Ergonomic Design, 2.4GHz Wireless Connection, 18-Month Battery Life, 5 Customizable Buttons, Windows, Mac, iPadOS, Chrome OS, Linux, Black",
        image : "/images/51n20MY+0rL._AC_SL1500_.jpg",
        link : "https://www.amazon.co.jp/dp/B08L4ZR79Q?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      },
      {
        name : "Keychron K8",
        description : "Keychron K8 Wireless Mechanical Keyboard, Compact 87-Key RGB LED Backlit N-Key Rollover, Aluminum Frame for Mac Windows, Gateron Red Switch, Black",
        image : "/images/pf-a34777cf--KeychronK8tenkeylesswirelessmechanicalkeyboardforMacWindowsiOSwithHotswappableGateronandKeychronOpticalswitchwithUSBCTypeCWiredcablemode.webp",
        link : "https://keychron.co.jp/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard",
      },
      {
        name : "Razer Seiren Mini Condenser Microphone",
        description : "Razer Seiren Mini Condenser Microphone, Ultra-Compact Microphone, Supercardioid Pickup Pattern, Professional Recording Quality, Streaming, Podcasting, Gaming, Black",
        image : "/images/61YZnYlPi+L._AC_SL1500_.jpg",
        link : "https://www.amazon.co.jp/dp/B08NPRVBJT?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      }
    ],
  },
];

const GearPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mt-8 space-y-8 max-w-7xl mx-auto">
        {gearList.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold text-black mb-4">{section.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {section.items.map((item) => (
                <div key={item.name} className="border border-black p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-black truncate">{item.name}</h3>
                    <p className="text-gray-700 text-sm line-clamp-3">{item.description}</p>
                  </div>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="bg-gray-700 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-gray-600 flex-shrink-0"
                  >
                    Get
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearPage;
