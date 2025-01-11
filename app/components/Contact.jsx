import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Submitting...");

    const formData = new FormData(event.target);
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY || "";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.dismiss();
        toast.success("Form Submitted Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        toast.dismiss();
        toast.error(data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full mx-auto py-10 px-4 md:px-8 bg-no-repeat bg-center bg-[url('/footer-bg-color.png')] dark:bg-none">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-3xl md:text-5xl font-Ovo">
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center max-w-lg md:max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm md:text-base">
        We'd love to hear from you. Send us a message and we'll respond as soon
        as possible.
      </motion.p>
      <div className="w-full max-w-full md:max-w-[70%] lg:max-w-[55%] mx-auto">
        <div className="flex items-center justify-center">
          <Card className="w-full border-none shadow-sm backdrop-blur-sm bg-[#fffef052] dark:bg-transparent">
            <CardHeader className="p-2.5"></CardHeader>
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onSubmit={handleSubmit}
              className="bg-none">
              <CardContent className="space-y-4">
                {/* Name row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="focus-visible:ring-2 py-4 md:py-5"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="focus-visible:ring-2 py-4 md:py-5"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Contact row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="focus-visible:ring-2 py-4 md:py-5"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91 (333) 000-0000"
                      className="focus-visible:ring-2 py-4 md:py-5"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    className="min-h-[100px] md:min-h-[150px] focus-visible:ring-2"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full py-4 md:py-6">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </motion.form>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
