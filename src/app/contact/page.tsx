'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Input, { TextArea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@fluxpropel.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-bg-primary via-light-bg-secondary to-light-bg-tertiary py-20 dark:from-dark-bg-primary dark:via-dark-bg-secondary dark:to-dark-bg-tertiary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-h1 font-bold text-light-text-primary dark:text-dark-text-primary">
              Get In{' '}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss
              how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <h2 className="mb-6 text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">
                  Send us a message
                </h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-lg bg-green-500/10 p-4 text-green-600 dark:text-green-400"
                  >
                    Thank you! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="John Doe"
                  />

                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                  />

                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Inc."
                  />

                  <div className="w-full">
                    <label className="mb-2 block text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-light-bg-tertiary bg-light-bg-primary px-4 py-3 text-light-text-primary transition-colors duration-standard focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 dark:border-dark-bg-tertiary dark:bg-dark-bg-secondary dark:text-dark-text-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="web-dev">Web Development</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <TextArea
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell us about your project..."
                    rows={6}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index}>
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-accent-primary/10 p-3">
                            <Icon className="h-6 w-6 text-accent-primary" />
                          </div>
                          <div>
                            <h3 className="mb-1 font-semibold text-light-text-primary dark:text-dark-text-primary">
                              {info.label}
                            </h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent-primary to-accent-secondary">
                <div className="text-white">
                  <h3 className="mb-3 text-xl font-bold">
                    Ready to start your project?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Our team is available to discuss your needs and provide a
                    tailored solution for your business.
                  </p>
                  <p className="text-sm opacity-75">
                    Average response time: Within 24 hours
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
