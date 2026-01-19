'use client';

import { motion } from 'framer-motion';
import { Check, Award, Users, Zap } from 'lucide-react';

const aboutPoints = [
  'Over 10+ years of IT industry experience',
  'Fully managed IT support & monitoring',
  'Cloud-first approach with Azure & AWS',
  'Fast response time & 24/7 availability'
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Zap, value: '24/7', label: 'Support Available' }
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-6">
                Your Trusted IT Partner for Digital Excellence
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 text-lg leading-relaxed mb-6"
            >
              At <strong className="text-slate-800">Guruji Tech Global</strong>, we provide
              secure, scalable, and cost-efficient IT solutions for businesses of all sizes.
              With expertise across Cloud Services, IT Support, Microsoft 365, Cyber Security
              and Infrastructure Management, we help organisations modernize their technology
              and operate efficiently.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              Our mission is simple: Deliver enterprise-grade IT services with transparency,
              speed, and reliability. Whether you need round-the-clock support, cloud
              migration, or complete IT management, our team is here to ensure your systems
              run smoothly so you can focus on growing your business.
            </motion.p>

            {/* About Points */}
            <ul className="space-y-4 mb-8">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-slate-800 text-base md:text-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-2">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-video bg-gradient-to-br from-blue-50 to-blue-100">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-8xl mb-6"
                  >
                    🖥️
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                      Modern IT Infrastructure
                    </h3>
                    <p className="text-slate-600 text-lg">
                      Empowering Your Business Growth
                    </p>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                >
                  ☁️
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 left-4 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                >
                  🔒
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 right-8 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-lg"
                >
                  ⚡
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-2xl"
              />

              <motion.div
                animate={{
                  rotate: [360, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-blue-300 rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
