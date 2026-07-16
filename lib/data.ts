
export type Product = {
  slug: string;
  name: string;
  size: string;
  resolution: string;
  brightness: string;
  interface: string;
  description: string;
  category: string;
  model: string;
};
    export const products: Product[] = [
  {
    slug:"37-inch-stretched-bar-lcd-display",
    name:"37-inch Stretched Bar LCD Display",
    size:"37 inch",
    resolution:"1920 × 540",
    brightness:"700 cd/m²",
    interface:"HDMI / USB (Optional RJ45, Wi-Fi, RS232)",
    description:"Ultra-wide stretched bar LCD display designed for retail shelves, digital signage, transportation systems and industrial applications.",
    category:"Stretched Bar LCD Displays",
    model:"ZF37AJ1-LE1",
  },

  {
    slug:"23-6-inch-round-lcd-display",
    name:"23.6-inch Round LCD Display",
    size:"23.6 inch",
    resolution:"1280 × 1280",
    brightness:"700 cd/m²",
    interface:"HDMI / USB (Optional RJ45, Wi-Fi, RS232)",
    description:"Creative round LCD display solution for retail stores, exhibitions, hotels, restaurants and smart commercial environments.",
    category:"Round LCD Displays",
    model: "YX236AJ1-TE1",
  },
  {
  slug: "41-inch-square-lcd-display",

  name: "41-inch Square LCD Display",

  size: "41 inch",

  resolution: "1920 × 1492",

  brightness: "500 cd/m²",

  interface: "HDMI / USB (Optional RJ45, Wi-Fi, RS232)",

  description:
    "Large square LCD display designed for retail stores, digital signage, exhibitions, smart commercial equipment and industrial applications. Featuring high resolution, stable performance and flexible customization options for OEM and ODM projects.",

  category: "Square LCD Displays",

 

  model: "ZF41AJ1-LE1",
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