// app/features/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiBell, FiShield, FiSmartphone, FiUsers, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: 'Smart Task Management',
    description: 'Intuitive drag-and-drop interface with smart categorization and priority settings.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FiBell className="w-8 h-8" />,
    title: 'Smart Reminders',
    description: 'Never miss deadlines with customizable notifications and recurring task options.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and stored securely. We prioritize your privacy.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Cross-Platform Sync',
    description: 'Access your tasks anywhere, on any device with real-time synchronization.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: 'Team Collaboration',
    description: 'Share lists, assign tasks, and collaborate seamlessly with your team.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: 'Progress Analytics',
    description: 'Track your productivity with detailed insights and performance reports.',
    color: 'from-red-500 to-red-600'
  }
];

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Powerful Features for <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Productive</span> Living
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Discover how TaskFlow can transform the way you organize your tasks and boost your productivity.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
              <div className="text-white">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-purple-200">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500K+</div>
            <div className="text-purple-200">Tasks Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-purple-200">Satisfaction Rate</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}