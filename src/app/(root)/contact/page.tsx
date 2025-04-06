import { Contact } from "@/components/contact";
import { MessageForm } from "./_components/message-form";

export default function ContactPage() {
  return (
    <div className="">
      <MessageForm />
      <Contact
        text="projects"
        link="/project"
        description="Explore the impact of our innovative solutions."
      />
    </div>
  );
}
