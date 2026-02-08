// app/categories/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiHome, FiHeart, FiShoppingBag, FiBook, FiMusic } from 'react-icons/fi';

const categories = [
  {
    name: 'Work & Projects',
    icon: <FiBriefcase className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    taskCount: 12,
    completed: 8
  },
  {
    name: 'Personal & Home',
    icon: <FiHome className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    taskCount: 8,
    completed: 5
  },
  {
    name: 'Health & Wellness',
    icon: <FiHeart className="w-8 h-8" />,
    color: 'from-red-500 to-red-600',
    taskCount: 6,
    completed: 3
  },
  {
    name: 'Shopping',
    icon: <FiShoppingBag className="w-8 h-8" />,
    color: 'from-yellow-500 to-yellow-600',
    taskCount: 4,
    completed: 2
  },
  {
    name: 'Learning',
    icon: <FiBook className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    taskCount: 10,
    completed: 7
  },
  {
    name: 'Entertainment',
    icon: <FiMusic className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-600',
    taskCount: 5,
    completed: 4
  }
];

export default function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Organize by <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Categories</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Group your tasks into categories for better organization and focused productivity.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">{category.taskCount}</div>
                <div className="text-sm text-gray-500">Tasks</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">{category.name}</h3>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{Math.round((category.completed / category.taskCount) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(category.completed / category.taskCount) * 100}%` }}
                  className={`h-full bg-gradient-to-r ${category.color}`}
                />
              </div>
            </div>
            
            <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
              View Tasks
            </button>
          </motion.div>
        ))}
      </div>

      {/* Create New Category */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Create Custom Categories</h2>
          <p className="text-purple-200 mb-6">
            Don't see a category that fits your needs? Create custom categories tailored to your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Enter new category name"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Add Category
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}