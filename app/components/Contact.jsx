import React, { useState, useEffect } from "react";
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
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Submitting...");

    const formDataObj = new FormData(event.target);
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY || "";
    formDataObj.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
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
      className="w-full mx-auto py-16 px-4 md:px-8 lg:px-[12%] bg-no-repeat bg-center bg-[url('/footer-bg-color.png')] dark:bg-none">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo">
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
        Have a project in mind or just want to say hello? Feel free to reach
        out. I'd love to hear from you!
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Side - Contact Info & LinkedIn Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8">
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="mt-1 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a
                  href="mailto:your-email@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  bravesyntax@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="mt-1 p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a
                  href="tel:+911234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  +91 9719975601
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="mt-1 p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Morta, Meerut Road, Ghaziabad Uttar Pradesh 201003
                </p>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 lg:mt-16">
            <div className="">
              {/* Empty space to match left column */}
              <div className="hidden lg:block"></div>

              {/* Map aligned with right column (form) */}
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.7270296715063!2d77.45686466953758!3d28.722291774570554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf144c07ef685%3A0xa1a7c5a010b24651!2sAMUL%20DAIRY!5e0!3m2!1sen!2sin!4v1761327365848!5m2!1sen!2sin"
                    width="100%"
                    height="210"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          <Card className="border-none shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold font-Ovo">Send a Message</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and I'll get back to you soon.
              </p>
            </CardHeader>
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="focus-visible:ring-2 focus-visible:ring-blue-500 py-5"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="focus-visible:ring-2 focus-visible:ring-blue-500 py-5"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="focus-visible:ring-2 focus-visible:ring-blue-500 py-5"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91 (333) 000-0000"
                      className="focus-visible:ring-2 focus-visible:ring-blue-500 py-5"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-[150px] focus-visible:ring-2 focus-visible:ring-blue-500 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardFooter>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
