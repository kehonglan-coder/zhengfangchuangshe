import Image from "next/image";
import Link from "next/link";

const links = [
  ["Products", "/products"],
  ["Custom Solutions", "/custom-solutions"],
  ["Applications", "/applications"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
];

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand">
        <Image
          src="/images/zf-logo.png"
          alt="ZF Display Logo"
          width={48}
          height={48}
          priority
        />

        <div>
          <strong>ZF DISPLAY</strong>
          <small>Custom LCD Display Manufacturer</small>
        </div>
      </Link>

      <nav>
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link className="button button-small" href="/contact">
        Get a Quote
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link href="/" className="brand">
            <Image
              src="/images/zf-logo.png"
              alt="ZF Display Logo"
              width={52}
              height={52}
            />

            <div>
              <strong>ZF DISPLAY</strong>
              <small>Since 2008</small>
            </div>
          </Link>

          <p>
            Guangzhou Zhengfang Chuangshe Electronic Technology Co.,
            Ltd. specializes in stretched bar LCD displays, round LCD
            displays, square LCD displays and customized OEM and ODM
            display solutions.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Contact</h3>

          <p>
            <strong>Contact:</strong> Zinnia
          </p>

          <p>
            <strong>Phone:</strong> +86 19570063144
          </p>

          <p>
            <strong>Email:</strong> To be confirmed
          </p>

          <p>
            <strong>WhatsApp:</strong> To be confirmed
          </p>

          <p>
            <strong>Address:</strong>
            <br />
            3F, Building C, Yunzhicai Industrial Park,
            No. 11 Zhonghan Road, Zhongcun Street,
            Panyu District, Guangzhou, Guangdong, China
          </p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Guangzhou Zhengfang Chuangshe
        Electronic Technology Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
}