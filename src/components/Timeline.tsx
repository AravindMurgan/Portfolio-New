import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'AHDB',
      period: 'Jan 2025 – Present',
      description: 'Built and scaled a regulated multi-tenant data platform used by UK retailers and regulators, delivering 10× faster dashboards, automated compliance reporting, and 70% monthly manual effort reduction.',
    },
    {
      title: 'Senior Web Developer',
      company: 'Pixafusion',
      period: 'June 2024 – Aug 2024',
      description: 'Developed a high-performance headless CMS for a premium car-hire platform using Next.js and Payload CMS, improving publishing speed by 30% and cutting infrastructure costs by 25%.',
    },
    {
      title: 'Software Engineer',
      company: 'Infosys',
      period: 'June 2021 – Sep 2023',
      description: 'Rebuilt a prioritized work-distribution system for 5,000+ daily users using React & TypeScript, boosting system speed by 40% and contributing $2.4M annual revenue growth.',
    },
    {
      title: 'Software Engineer',
      company: 'Tech Mahindra',
      period: 'April 2019 - Jun 2021',
      description: 'Optimized a GPS reporting tool with modern frontend performance techniques to reduce load time by 50% and implemented real-time alerting and automated PDF reporting features.',
    }
  ];

  return (
    <div id='experience' className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
            >
              <div className="w-5/12" />
              <div className="z-20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full"
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </motion.div>
              </div>
              <div className="w-5/12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;