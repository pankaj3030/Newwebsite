'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Cloud Services',
    video: '/cloud.mp4',
    poster: '/cloud-poster.jpg',
    features: ['Azure & AWS Migration', 'Cloud Backup', 'Virtual Machines']
  },
  {
    title: 'Microsoft 365',
    video: '/ms365.mp4',
    poster: '/ms365-poster.jpg',
    features: ['Email Hosting', 'SharePoint Setup', 'Teams Integration']
  },
  {
    title: 'Cyber Security',
    video: '/cyber.mp4',
    poster: '/cyber-poster.jpg',
    features: ['Antivirus Management', 'Firewall Protection', 'Threat Monitoring']
  },
  {
    title: '24/7 IT Support',
    video: '/support.mp4',
    poster: '/support-poster.jpg',
    features: ['Remote Support', 'On-site Visits', 'Device Management']
  },
  {
    title: 'Network Solutions',
    video: '/network.mp4',
    poster: '/network-poster.jpg',
    features: ['LAN / WAN Setup', 'VPN Configuration', 'Network Monitoring']
  },
  {
    title: 'DevOps & Automation',
    video: '/devops.mp4',
    poster: '/devops-poster.jpg',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Deployment Automation']
  },
  {
    title: 'IP Telephony',
    video: '/telephone.mp4',
    poster: '/telephone-poster.jpg',
    features: ['Internet-based Calling', 'High Audio Quality', 'Flexible & Low-Cost VoIP']
  },
  {
    title: 'IT Consulting',
    video: '/consulting.mp4',
    poster: '/consulting-poster.jpg',
    features: ['Strategy Planning', 'IT Audits', 'Technology Roadmaps']
  }
];

interface ServiceCardProps {
  service: {
    title: string;
    video: string;
    poster: string;
    features: string[];
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {
      // Ignore autoplay errors
    });
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="flex h-[280px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Background */}
      <div className="w-2/5 h-full relative">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={service.poster}
          className="w-full h-full object-cover"
        >
          <source src={service.video} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="w-3/5 h-full p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
        <ul className="space-y-2">
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
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
