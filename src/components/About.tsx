'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const aboutPoints = [
  'Over 10+ years of IT industry experience',
  'Fully managed IT support & monitoring',
  'Cloud-first approach with Azure & AWS',
  'Fast response time & 24/7 availability'
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              About Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At <strong className="text-slate-800">Guruji Tech Global</strong>, we provide
              secure, scalable, and cost-efficient IT solutions for businesses of all sizes.
              With expertise across Cloud Services, IT Support, Microsoft 365, Cyber Security
              and Infrastructure Management, we help organisations modernize their technology
              and operate efficiently.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our mission is simple: Deliver enterprise-grade IT services with transparency,
              speed, and reliability. Whether you need round-the-clock support, cloud
              migration, or complete IT management, our team is here to ensure your systems
              run smoothly so you can focus on growing your business.
            </p>

            {/* About Points */}
            <ul className="space-y-4">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-slate-800 text-base md:text-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-100">
              <img
                src="/aboutus.png"
                alt="Guruji Tech Global - About Our IT Infrastructure"
                className="w-full h-full object-cover"
                width="800"
                height="450"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
