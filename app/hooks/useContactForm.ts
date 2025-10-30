import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { ContactFormData, FormSubmissionResponse } from "@/lib/types";

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
};

/**
 * Custom hook to manage contact form state and submission
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Submitting...");

    const formDataObj = new FormData(event.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY || "";

    if (!accessKey) {
      toast.dismiss(loadingToast);
      toast.error("Configuration error. Please contact the site owner.");
      setIsSubmitting(false);
      return;
    }

    formDataObj.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data: FormSubmissionResponse = await response.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Message sent successfully!");
        resetForm();
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
