export type Product = {
  slug: string;
  name: string;
  model: string;
  size: string;
  resolution: string;
  brightness: string;
  interface: string;
  touch: string;
  description: string;
  category: string;
  applications: string[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "37-inch-stretched-bar-lcd-display",
    name: "37-inch Stretched Bar LCD Display",
    model: "ZF370AJ1-TE1",
    size: '37"',
    resolution: "1920 × 540",
    brightness: "700 nits",
    interface:
      "HDMI and USB standard; optional RJ45, Wi-Fi and RS232",
    touch: "Optional customization",
    description:
      "A commercial-grade ultra-wide LCD display designed for narrow installation spaces, retail shelves, digital signage, transportation systems, kiosks and industrial equipment.",
    category: "Stretched Bar LCD Displays",
    applications: [
      "Retail shelves",
      "Supermarkets",
      "Shopping malls",
      "Transportation information systems",
      "Digital signage",
      "Exhibitions",
      "Vending machines",
      "Self-service kiosks",
      "Industrial equipment",
    ],
    features: [
      "Ultra-wide stretched design for narrow installation spaces",
      "High-definition image quality with vivid colors and wide viewing angles",
      "Commercial-grade components for reliable 24/7 operation",
      "Standard HDMI and USB interfaces",
      "Optional RJ45, Wi-Fi and RS232 connectivity",
      "Supports video, image and scrolling-text playback",
      "Optional remote content-management capability",
      "Landscape, portrait, wall-mounted and embedded installation",
      "Custom size, resolution, brightness, enclosure, interface, operating system and touch function",
    ],
  },
  {
    slug: "23-6-inch-round-lcd-display",
    name: "23.6-inch Round LCD Display",
    model: "YX236AJ1-TE1",
    size: '23.6"',
    resolution: "1280 × 1280",
    brightness: "700 nits",
    interface:
      "HDMI and USB standard; optional RJ45, Wi-Fi and RS232",
    touch: "Optional customization",
    description:
      "A distinctive circular LCD display developed for creative commercial spaces, brand presentation, exhibitions, smart devices and customized visual installations.",
    category: "Round LCD Displays",
    applications: [
      "Retail stores",
      "Shopping malls",
      "Restaurants",
      "Hotels",
      "Museums",
      "Exhibitions",
      "Brand showrooms",
      "Smart-home devices",
      "Interactive installations",
    ],
    features: [
      "Distinctive circular design for stronger visual impact",
      "1280 × 1280 high-definition resolution",
      "Vivid colors and wide viewing angles",
      "Commercial-grade components for reliable 24/7 operation",
      "Standard HDMI and USB interfaces",
      "Optional RJ45, Wi-Fi and RS232 connectivity",
      "Supports video, image and advertising-content playback",
      "Optional remote content updates",
      "Wall-mounted, embedded, desktop and customized installation",
      "Custom brightness, enclosure, interface, operating system, logo branding and touch function",
    ],
  },
];

export const blogPosts = [
  {
    slug: "what-is-a-stretched-bar-lcd-display",
    title: "What Is a Stretched Bar LCD Display?",
    description:
      "An introduction to stretched bar LCD displays and their common commercial and industrial applications.",
    body:
      "A stretched bar LCD display is a long, narrow display format designed for applications where a conventional screen is too tall or too wide. It is commonly used in retail shelves, transportation systems, digital signage, industrial equipment and compact advertising spaces.\n\nWhen selecting a stretched display, buyers should consider screen size, resolution, brightness, interface, mounting structure, enclosure and operating environment. ZF provides flexible OEM and ODM customization according to project requirements.",
  },
  {
    slug: "how-to-choose-a-custom-lcd-display",
    title: "How to Choose a Custom LCD Display",
    description:
      "Key factors to consider when selecting a custom LCD display for commercial equipment and system integration.",
    body:
      "Choosing a custom LCD display starts with the installation space and intended application. Important factors include screen dimensions, resolution, brightness, viewing angle, interface, touch requirements, operating system and mounting method.\n\nPrototype testing is recommended before mass production because it helps verify mechanical fit, display quality, connectivity and overall system compatibility.",
  },
  {
    slug: "applications-of-round-lcd-displays",
    title: "Applications of Round LCD Displays",
    description:
      "How round LCD displays create distinctive visual experiences in retail, exhibitions and smart devices.",
    body:
      "Round LCD displays offer a visually distinctive alternative to traditional rectangular screens. They are commonly used in retail stores, hotels, restaurants, museums, brand showrooms, smart-home devices and interactive installations.\n\nA customized circular display can support different brightness levels, interfaces, enclosures, operating systems, mounting methods and brand-design requirements.",
  },
];