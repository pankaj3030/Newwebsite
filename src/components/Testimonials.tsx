'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    content:
      'Guruji Tech Global transformed our IT infrastructure. Outstanding service and incredibly responsive team!',
    author: 'David',
    company: 'Logistics Company'
  },
  {
    content:
      'Fast response, highly professional, and very knowledgeable. They\'ve become an essential part of our business operations.',
    author: 'Sarah',
    company: 'Accounting Firm'
  },
  {
    content:
      'Reliable team with deep expertise. Best experience with cloud migration we\'ve ever had.',
    author: 'Mark',
    company: 'Construction Group'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Testimonials
          </h2>
          <p className="text-slate-600 text-lg">What our clients say about us.</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">
                  — {testimonial.author}
                </div>
                <div className="text-slate-500 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
