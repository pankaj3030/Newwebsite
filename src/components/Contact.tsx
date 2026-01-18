'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const serviceOptions = [
  'Cloud Services',
  'Microsoft 365',
  'Cyber Security',
  '24/7 IT Support',
  'Network Solutions',
  'DevOps & Automation',
  'IP Telephony',
  'IT Consulting',
  'Others'
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    gdprConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, gdprConsent: e.target.checked }));
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length < 2) {
      toast.error('Name must be at least 2 characters');
      return false;
    }
    if (!formData.email || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.service) {
      toast.error('Please select a service');
      return false;
    }
    if (!formData.message || formData.message.length < 10) {
      toast.error('Message must be at least 10 characters');
      return false;
    }
    if (!formData.gdprConsent) {
      toast.error('Please accept the GDPR consent');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          service: '',
          message: '',
          gdprConsent: false
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-slate-300 text-lg">Reach out and our team will respond shortly.</p>
        </motion.div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                Let's Build Something Great
              </h2>
              <p className="text-slate-300 mb-8 text-center">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-200 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                    required
                  >
                    <option value="" disabled className="text-slate-900">
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="text-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                    required
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdpr_consent"
                    name="gdpr_consent"
                    checked={formData.gdprConsent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                    required
                  />
                  <label htmlFor="gdpr_consent" className="text-sm text-slate-200 leading-relaxed">
                    I agree to the processing of my personal data as per the{' '}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
