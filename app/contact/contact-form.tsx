"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Thank you for your inquiry. We will contact you soon.");
  }

  return (
    <div className="contact-container">

      <div className="contact-info">
<h2>Request a Quote</h2>


<p className="intro-text">
Looking for a customized LCD display solution?
</p>


<p>
ZF Display specializes in customized LCD display solutions, including stretched bar LCD displays, round LCD displays, square LCD displays and OEM/ODM projects.
</p>


<p>
Share your project requirements with us. Our engineering team will provide professional technical support and a suitable display solution.
</p>

      </div>


      <form onSubmit={submit} className="contact-form">

        <input
          name="name"
          placeholder="Your Name *"
          required
        />

        <input
  name="company"
  placeholder="Company Name"
/>


<input
  name="website"
  placeholder="Company Website"
/>
        

       <input
  name="email"
  placeholder="Email Address *"
  type="email"
/>


<input
  name="size"
  placeholder="Display Size (e.g. 37 inch)"
/>
        <input
          name="whatsapp"
          placeholder="WhatsApp Number"
        />


     <textarea
name="message"
placeholder="Tell us about your display requirements..."
rows={3}
/>


     <button type="submit">
Request Quote
</button>

        {message && (
          <p className="success">
            {message}
          </p>
        )}

      </form>

    </div>
  );
}