import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactCopy, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactCopy.body,
  openGraph: {
    title: `Contact — ${site.name}`,
    description: contactCopy.body,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactCopy.heading} description={contactCopy.body} />
      <Section pad="lg">
        <ContactForm />
      </Section>
    </>
  );
}
