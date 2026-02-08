// app/tutorial/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiDownload, FiSettings, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Onboarding',
    description: 'Create your account in seconds with our simple onboarding process.',
    icon: <FiDownload className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'Create Your First Task',
    description: 'Click the "+" button to add tasks, set categories, and add due dates.',
    icon: <FiCheckCircle className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'Organize with Categories',
    description: 'Use categories to group similar tasks and keep your workspace tidy.',
    icon: <FiSettings className="w-6 h-6" />
  },
  {
    number: '04',
    title: 'Track Progress',
    description: 'Monitor your completion rate and productivity with our analytics dashboard.',
    icon: <FiPlay className="w-6 h-6" />
  }
];

export default function TutorialPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Get Started in <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">4 Easy Steps</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Follow our simple guide to master TaskFlow and boost your productivity from day one.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <div className="text-4xl font-bold text-gray-200 mb-4">{step.number}</div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 transform translate-x-4"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Video Tutorial Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Watch Quick Tutorial</h2>
          <div className="aspect-video bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPlay className="w-8 h-8" />
              </div>
              <p className="text-xl font-semibold">Coming Soon</p>
              <p className="text-purple-200 mt-2">Video tutorial will be available soon</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is TaskFlow free to use?',
              a: 'Yes! TaskFlow offers a generous free plan with all essential features.'
            },
            {
              q: 'Can I use TaskFlow on mobile?',
              a: 'Absolutely! TaskFlow is fully responsive and works perfectly on all devices.'
            },
            {
              q: 'How do I share tasks with others?',
              a: 'Click the share button on any list to collaborate with team members or friends.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}