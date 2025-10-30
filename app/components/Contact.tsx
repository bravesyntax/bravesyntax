"use client";

import React from "react";
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
import { motion } from "motion/react";
import { useContactForm } from "../hooks/useContactForm";

/**
 * Contact section with form submission and contact information
 */
const Contact: React.FC = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="mx-auto bg-[url('/footer-bg-color.png')] bg-center bg-no-repeat px-4 py-16 dark:bg-none md:px-8 lg:px-[12%]"
      aria-labelledby="contact-heading"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-2 text-center text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        id="contact-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-Ovo md:text-5xl"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mx-auto mb-12 mt-5 max-w-2xl text-center font-Ovo text-gray-600 dark:text-gray-300"
      >
        Have a project in mind or just want to say hello? Feel free to reach
        out. I'd love to hear from you!
      </motion.p>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Side - Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white/50 p-4 transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-white/5"
            >
              <div className="mt-1 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Email</h4>
                <a
                  href="mailto:bravesyntax@gmail.com"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  bravesyntax@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white/50 p-4 transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-white/5"
            >
              <div className="mt-1 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Phone</h4>
                <a
                  href="tel:+919719975601"
                  className="text-gray-600 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  +91 9719975601
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white/50 p-4 transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-white/5"
            >
              <div className="mt-1 rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Location</h4>
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
            className="mt-4 lg:mt-16"
          >
            <div className="w-full">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 shadow-xl dark:border-gray-700 dark:bg-gray-900/80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.7270296715063!2d77.45686466953758!3d28.722291774570554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf144c07ef685%3A0xa1a7c5a010b24651!2sAMUL%20DAIRY!5e0!3m2!1sen!2sin!4v1761327365848!5m2!1sen!2sin"
                  width="100%"
                  height="210"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="border-none bg-white/80 shadow-xl backdrop-blur-sm dark:bg-gray-900/80">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold font-Ovo">
                Send a Message
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and I'll get back to you soon.
              </p>
            </CardHeader>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onSubmit={handleSubmit}
            >
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="py-5 focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="py-5 focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="py-5 focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="+91 (333) 000-0000"
                      className="py-5 focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-[150px] resize-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-6 text-base font-medium shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl disabled:opacity-50"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
