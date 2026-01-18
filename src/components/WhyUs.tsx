'use client';

import { motion } from 'framer-motion';

const whyUsItems = [
  {
    icon: '💼',
    title: 'Professional Expertise',
    description:
      'Certified IT engineers with deep experience in cloud, cybersecurity, networking and modern workplace solutions.'
  },
  {
    icon: '🔒',
    title: 'Security First Approach',
    description:
      'We implement industry-standard security frameworks ensuring compliance, protection and risk reduction.'
  },
  {
    icon: '⚡',
    title: 'Fast Response & 24/7 Support',
    description:
      'Our helpdesk and monitoring ensure your systems remain operational at all times.'
  },
  {
    icon: '🚀',
    title: 'Scalable Solutions',
    description:
      'Solutions engineered to grow with your business—from cloud migrations to full IT modernisation.'
  },
  {
    icon: '🧩',
    title: 'Custom-Built IT Solutions',
    description:
      'We design IT systems tailored to your exact business needs for efficiency and long-term scalability.'
  },
  {
    icon: '📊',
    title: 'Data-Driven Strategy',
    description:
      'Decisions backed by analytics, monitoring insights and industry best-practice frameworks.'
  },
  {
    icon: '🤝',
    title: 'Partnership Mindset',
    description:
      'We work as an extension of your team—aligned with your goals, culture, and success metrics.'
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description:
      'No hidden fees or surprise costs—clear, predictable monthly pricing with no long-term lock-ins.'
  },
  {
    icon: '🌍',
    title: 'UK-Based Support Team',
    description:
      'Local engineers who understand UK business regulations, time zones, and communication styles.'
  },
  {
    icon: '🛡️',
    title: 'Proactive Monitoring',
    description:
      'We detect and resolve issues before they impact your operations—24/7 infrastructure health checks.'
  },
  {
    icon: '🔄',
    title: 'Seamless Onboarding',
    description:
      'Zero-downtime transition from your current provider with full documentation and training included.'
  },
  {
    icon: '🏆',
    title: 'Client-Centric Focus',
    description:
      'Your success is our priority—regular reviews, strategic planning sessions, and continuous improvement.'
  }
];

export function WhyUs() {
  return (
    <section id="whyus" className="py-20 md:py-24 bg-slate-50">
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
            Why Choose Us
          </h2>
          <p className="text-slate-600 text-lg">
            Enterprise-level reliability, proven expertise and a commitment to delivering
            secure, scalable IT solutions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whyUsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
