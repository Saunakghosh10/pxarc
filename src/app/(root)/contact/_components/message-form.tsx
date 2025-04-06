"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

// Initialize EmailJS once
emailjs.init("snAoFM0xgOGopuRP_");

export const MessageForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendWhatsAppMessage = (name: string, email: string, message: string) => {
    const whatsappNumber = "7439620266";
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.target as HTMLFormElement;
      const nameInput = form.elements.namedItem('from_name') as HTMLInputElement;
      const emailInput = form.elements.namedItem('from_email') as HTMLInputElement;
      const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;
      
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;

      if (!name || !email || !message) {
        toast.error("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      // Using EmailJS's sendForm method which is recommended for forms
      const response = await emailjs.sendForm(
        'service_w9lb742',
        'template_oftz8ga',
        form,
        'snAoFM0xgOGopuRP_'
      );

      console.log("Email sent successfully:", response);
      
      // Send WhatsApp message
      sendWhatsAppMessage(name, email, message);

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      if (error instanceof Error) {
        toast.error(`Failed to send message: ${error.message}`);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-32 px-10 h-screen bg-black">
      <h1
        className={`${sixCaps.className} text-[6rem] leading-[5rem] md:text-[calc(1rem+10.15vw)] md:leading-[calc(1rem+8.15vw)] text-white`}
      >
        {"Let's Talk"}
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-8 w-full md:w-[600px]"
      >
        <div className="flex max-md:flex-col items-center gap-8 w-full">
          <div className="border-white px-0 pb-2 border-b w-1/2 max-md:w-full">
            <input
              type="text"
              name="from_name"
              placeholder="Enter your Name"
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-white outline-none w-full"
            />
          </div>
          <div className="border-white px-0 pb-2 border-b w-1/2 max-md:w-full">
            <input
              type="email"
              name="from_email"
              placeholder="Enter your Email"
              className="border-0 bg-transparent placeholder:font-medium text-medium text-white placeholder:text-white outline-none w-full"
            />
          </div>
        </div>
        <div className="border-white md:mt-8 px-0 pb-2 border-b w-full">
          <textarea
            placeholder="Tell us about yourself"
            name="message"
            rows={1}
            className="border-0 bg-transparent w-full placeholder:font-medium text-medium text-white placeholder:text-white outline-none resize-none"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="border-white px-4 py-2 border rounded-[20px] text-base text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};
