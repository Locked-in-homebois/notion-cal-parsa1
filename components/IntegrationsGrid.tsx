"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

const integrations = [
  {
    icon: '/Icons/notion-icon.svg',
    title: 'Notion',
    description: 'Bring in important dates across workspaces into one calendar.',
  },
  {
    icon: '/Icons/google-calendar-icon.svg',
    title: 'Google Calendar',
    description: 'Connect Google Calendar with your existing Notion workspace.',
  },
  {
    icon: '/Icons/google-meet-icon.svg',
    title: 'Google Meet',
    description: 'Available by default with Google Calendar.',
  },
  {
    icon: '/Icons/zoom-icon.svg',
    title: 'Zoom',
    description: 'Create new Zoom meetings directly in Notion Calendar.',
  },
  {
    icon: '/Icons/apple-calendar-icon.svg',
    title: 'Apple Calendar',
    description: 'Create new Apple Calendar meetings directly in Notion.',
  },
  {
    icon: '/Icons/other-providers-icon.svg',
    title: 'Other providers',
    description: 'Add a custom link from other popular conferencing services.',
  },
];

// 1. THE PARENT RULES (The General)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // "Hey children, wait 0.1s between each of you appearing"
      staggerChildren: 0.1
    }
  }
};

// 2. THE CHILD RULES (The Soldiers)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 } // Individual animation speed
  }
};

const IntegrationsGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Designed to work with your favorite tools
        </h2>

        <motion.div
          // 3. ASSIGN THE PARENT
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.title}
              // 4. ASSIGN THE CHILD (Must match variant keys "hidden" and "visible")
              variants={itemVariants}
              className="bg-[#F7F7F5] rounded-xl p-6"
            >
              <Image src={integration.icon} alt={`${integration.title} icon`} width={24} height={24} />
              <h3 className="font-semibold text-lg mt-4 mb-2">
                {integration.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;