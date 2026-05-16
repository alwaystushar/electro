"use client";

import { ContactForm } from "@/components/sections/contact-form";
import { Modal } from "@/components/ui/modal";

type FeatureCardInquiryModalProps = {
  open: boolean;
  inquiryTitle: string | null;
  service: string | null;
  onClose: () => void;
};

export function FeatureCardInquiryModal({
  open,
  inquiryTitle,
  service,
  onClose,
}: FeatureCardInquiryModalProps) {
  const title = inquiryTitle ? `Inquire about ${inquiryTitle}` : "Get in touch";

  return (
    <Modal open={open} onClose={onClose} title={title}>
      {service ? (
        <ContactForm
          key={`${inquiryTitle}-${service}`}
          service={service}
          variant="about"
          layout="stacked"
          submitLabel="Send inquiry"
        />
      ) : null}
    </Modal>
  );
}
