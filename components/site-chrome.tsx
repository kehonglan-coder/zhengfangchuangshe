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
Email:
<br/>
<a href="mailto:Ziyizhao0107@gmail.com">
Ziyizhao0107@gmail.com
</a>
</p>

<p>
WhatsApp:
<br/>
<a href="https://wa.me/8619570063144">
+86 19570063144
</a>
</p>

<p>
  <strong>Company:</strong>
  <br />
  Guangzhou Zhengfang Chuangshe Electronic Technology Co., Ltd.
</p>

<p>
  <strong>Location:</strong>
  <br />
  Guangzhou, China
</p>

<p>
  <strong>Business:</strong>
  <br />
  Customized LCD display solutions including stretched bar displays, round displays, square displays and industrial LCD screens.
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