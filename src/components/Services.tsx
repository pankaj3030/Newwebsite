'use client';

import { motion } from 'framer-motion';
import { Cloud, Shield, HeadphonesIcon, Network, Cpu, Phone, FileText, Users } from 'lucide-react';

const services = [
  {
    title: 'Cloud Services',
    icon: Cloud,
    features: ['Azure & AWS Migration', 'Cloud Backup', 'Virtual Machines']
  },
  {
    title: 'Microsoft 365',
    icon: FileText,
    features: ['Email Hosting', 'SharePoint Setup', 'Teams Integration']
  },
  {
    title: 'Cyber Security',
    icon: Shield,
    features: ['Antivirus Management', 'Firewall Protection', 'Threat Monitoring']
  },
  {
    title: '24/7 IT Support',
    icon: HeadphonesIcon,
    features: ['Remote Support', 'On-site Visits', 'Device Management']
  },
  {
    title: 'Network Solutions',
    icon: Network,
    features: ['LAN / WAN Setup', 'VPN Configuration', 'Network Monitoring']
  },
  {
    title: 'DevOps & Automation',
    icon: Cpu,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Deployment Automation']
  },
  {
    title: 'IP Telephony',
    icon: Phone,
    features: ['Internet-based Calling', 'High Audio Quality', 'Flexible & Low-Cost VoIP']
  },
  {
    title: 'IT Consulting',
    icon: Users,
    features: ['Strategy Planning', 'IT Audits', 'Technology Roadmaps']
  }
];

interface ServiceCardProps {
  service: {
    title: string;
    icon: any;
    features: string[];
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-[280px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white p-6 flex flex-col"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Icon size={28} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
      <ul className="space-y-2 flex-grow">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-slate-600 text-sm py-1 border-b border-slate-100 last:border-0 flex items-center"
          >
            <span className="text-blue-500 font-bold mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
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
            Our Services
          </h2>
          <p className="text-slate-600 text-lg">
            Explore our professional IT services tailored for modern businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
