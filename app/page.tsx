import Link from "next/link";
import { products } from "@/lib/data";
import {
  ArrowLink,
  Placeholder,
  SectionTitle,
} from "@/components/ui";

import { ContactForm } from "@/app/contact/contact-form";
const applications = [
  "Retail Shelves",
  "Supermarkets & Shopping Malls",
  "Digital Signage",
  "Transportation Systems",
  "Vending Machines",
  "Self-service Kiosks",
  "Industrial Equipment",
  "Exhibitions & Brand Showrooms",
];

const capabilities = [
  {
    number: "01",
    title: "17+ Years Manufacturing Experience",
    description:
      "Professional LCD display manufacturing experience since 2008, supporting commercial and industrial display projects.",
  },
  {
    number: "02",
    title: "OEM & ODM Customization",
    description:
      "Customize screen size, resolution, brightness, interface, enclosure, operating system and touch functionality.",
  },
  {
    number: "03",
    title: "Flexible Display Solutions",
    description:
      "We provide stretched bar, round, square and other customized LCD display formats for different applications.",
  },
  {
    number: "04",
    title: "Reliable Quality Control",
    description:
      "Inspection and testing procedures help ensure stable performance from sample development to batch production.",
  },
];

 const productCategories = [
  {
    name: "Stretched Bar LCD Displays",
    description:
      "Ultra-wide LCD displays for retail shelves, digital signage, transportation systems, kiosks and industrial equipment.",
  },
  {
    name: "Round LCD Displays",
    description:
      "Creative circular LCD displays for retail stores, exhibitions, hotels, restaurants, smart devices and brand showrooms.",
  },
  {
    name: "Square LCD Displays",
    description:
      "Square-format LCD displays for commercial equipment, industrial control systems, smart terminals and customized devices.",
  },
  {
    name: "Shelf Edge Displays",
    description:
      "Slim display solutions designed for supermarket shelves, smart retail systems, pricing information and promotional content.",
  },
  {
    name: "High Brightness Displays",
    description:
      "High-brightness LCD display solutions for demanding commercial environments and locations with strong ambient light.",
  },
  {
    name: "Custom LCD Display Solutions",
    description:
      "Customized screen size, resolution, brightness, interface, enclosure, operating system, mounting structure and touch function.",
  },
];

const developmentProcess = [
  {
    title: "Requirements",
    description:
      "Share your application, target size, specifications and estimated quantity.",
  },
  {
    title: "Evaluation",
    description:
      "Our team reviews technical feasibility and recommends a suitable configuration.",
  },
  {
    title: "Design",
    description:
      "Display, interface, housing, mounting and system details are confirmed.",
  },
  {
    title: "Sample",
    description:
      "A prototype or sample is prepared for functional and appearance verification.",
  },
  {
    title: "Validation",
    description:
      "Performance, interface, brightness, appearance and installation are checked.",
  },
  {
    title: "Production",
    description:
      "Approved products move into controlled batch production and delivery.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ZHENGFANG DISPLAY</p>

          <h1>
            Custom LCD Display
            <span>Manufacturer</span>
          </h1>

          <h2>
            Stretched Bar LCD Display, Round LCD Display, Square LCD Display, OEM/ODM Custom Display Solutions
          </h2>

          <p>
            We design and manufacture customized LCD display solutions for global B2B customers.
          </p>

          <div className="hero-actions">
            <Link className="button" href="#contact">
              Get A Quote
            </Link>

            <Link className="button button-outline" href="/products">
              Explore Products
            </Link>
          </div>

          <div className="hero-badges">
            <span className="hero-pill">Since 2008</span>
            <span className="hero-pill">Customization</span>
            <span className="hero-pill">Engineering Support</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          
 eyebrow="Why Choose ZF Display"
 title="Professional Custom LCD Display Solutions Since 2008"
 text="With over 17 years of manufacturing experience, we provide reliable OEM and ODM display solutions for global businesses."
/>

        <div className="grid grid-4">
          {capabilities.map((item) => (
            <div className="card" key={item.title}>
              <p className="number">{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <SectionTitle
    eyebrow="Our Products"
    title="Professional LCD Display Product Portfolio"
    text="We provide stretched bar LCD displays, round LCD displays, square LCD displays and fully customized display solutions for commercial and industrial applications."
/>

        <div className="grid grid-3">
          {productCategories.map((category) => (
            <div className="card" key={category.name}>
              <Placeholder
                label={`${category.name} product image`}
              />

              <h3>{category.name}</h3>
              <p>{category.description}</p>

              <ArrowLink href="/products">
                Explore Category
              </ArrowLink>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Featured Products"
          title="Reliable starting points for your display project"
          text="Explore selected ZF display products. Specifications and configurations can be adjusted according to project requirements."
        />

        <div className="grid grid-3">
          {products.slice(0, 3).map((product) => (
            <div
              className="card product-card"
              key={product.slug}
            >
              <Placeholder label={`${product.name} image`} />

              <div>
                <p className="eyebrow">ZF Display Product</p>
                <h3>{product.name}</h3>

                <div className="specs">
                  <span>{product.size}</span>
                  <span>{product.resolution}</span>
                  <span>{product.brightness}</span>
                  <span>{product.interface}</span>
                </div>

                <ArrowLink
                  href={`/products/${product.slug}`}
                >
                  View Details
                </ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <SectionTitle
          eyebrow="Applications"
          title="Designed for environments where information needs to stand out"
          text="Our display solutions can be configured for a wide range of commercial, industrial and smart-equipment applications."
        />

        <div className="grid grid-4">
          {applications.map((application) => (
            <Link
              href="/contact"
              className="card"
              key={application}
            >
              <h3>{application}</h3>
              <p>
                Discuss a customized display configuration for this
                application.
              </p>
              <span className="arrow-link">
                Send Inquiry →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <SectionTitle
              eyebrow="Custom Development"
              title="A clear process from initial idea to batch production"
              text="ZF works with customers through each stage of display development to reduce uncertainty and improve project efficiency."
            />

            <div className="grid grid-3 process">
              {developmentProcess.map((step) => (
                <div className="card" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="dark-panel">
            <p className="eyebrow">OEM & ODM Capabilities</p>

            <h2>
              A custom LCD display should fit your complete product.
            </h2>

            <p>
              We can customize screen size, resolution, brightness,
              interface, touch function, housing, operating system,
              mounting structure, logo and packaging according to your
              project requirements.
            </p>

            <Link
              className="button"
              href="/custom-solutions"
            >
              Explore Custom Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="split">
          <Placeholder
            className="detail-image"
            label="ZF factory, production or quality-control photography"
          />

          <div>
            <SectionTitle
              eyebrow="Production & Quality"
              title="Reliable quality from sample development to delivery"
              text="Our project workflow can include incoming material inspection, display performance testing, aging tests, brightness and color checks, interface verification, appearance inspection and packaging inspection."
            />

            <ArrowLink href="/quality-control">
              View Our Quality-Control Process
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="dark-panel">
          <p className="eyebrow">Start Your Project</p>

          <h2>
            Need a custom LCD display for your next product?
          </h2>

          <p>
            Tell us your application, target size, required
            specifications and estimated quantity. Zinnia and the ZF
            team will help you evaluate the next step.
          </p>

         <Link className="button" href="#contact">
            Request a Quote
          </Link>
        </div>
      </section>


<section id="contact" className="section contact-section">

  <div className="detail-grid">

    <div>
      <ContactForm />
    </div>


    <aside className="dark-panel">

      <h2>Contact Information</h2>

      <p>
        <strong>Contact Person:</strong>
        <br />
        Zinnia
      </p>

      <p>
        <strong>Email:</strong>
        <br />
        <a href="mailto:Ziyizhao0107@gmail.com">
          Ziyizhao0107@gmail.com
        </a>
      </p>

      <p>
        <strong>WhatsApp:</strong>
        <br />
        +86 19570063144
      </p>

      <p>
        <strong>Company:</strong>
        <br />
        ZF Display (Guangzhou Zhengfang Chuangshe Electronic Technology Co., Ltd.)
      </p>

      <p>
        <strong>Location:</strong>
        <br />
        Guangzhou, China
      </p>


    </aside>

  </div>

</section>
</main>
);
}