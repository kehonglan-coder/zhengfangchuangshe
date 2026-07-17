import type { Metadata } from "next"; import { ContactForm } from "./contact-form"; export const metadata: Metadata = { title: "Request a Quote", description: "Request a quote for a custom stretched bar LCD display or ultra-wide display project." }; export default function Contact() { return <main><section className="page-hero contact-hero">
    <p className="eyebrow">
Request a Quote
</p>

<h1>
Request a Custom LCD Display Solution
</h1><p>
Tell us your display requirements, and our engineering team will provide a professional customized display solution.
</p></section><section className="section contact-section"><div className="detail-grid"><div>
<ContactForm />
</div><aside className="dark-panel">
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
<a href="https://wa.me/8619570063144">
+86 19570063144
</a>
</p>

  <p>
    <strong>Company:</strong>
    <br />
   ZF Display
(Guangzhou Zhengfang Chuangshe Electronic Technology Co., Ltd.)
  </p>

  <p>
    <strong>Location:</strong>
    <br />
    Guangzhou, China
  </p>

 
</aside></div></section></main> }
