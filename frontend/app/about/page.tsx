// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiHeart, 
  FiAward, 
  FiUsers, 
  FiGlobe,
  FiTrendingUp,
  FiLock,
  FiZap,
  FiStar
} from 'react-icons/fi';
import { 
  MdOutlineHandshake,
  MdOutlineAutoAwesome,
  MdOutlineSecurity,
  MdOutlineRocketLaunch
} from 'react-icons/md';

const values = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: 'Our Mission',
    description: 'To transform task management from a chore into a seamless, empowering experience that enhances productivity and reduces stress.',
    color: 'from-purple-500 to-purple-600',
    highlights: ['Simplify complexity', 'Enhance focus', 'Boost productivity']
  },
  {
    icon: <FiEye className="w-8 h-8" />,
    title: 'Our Vision',
    description: 'A world where technology serves human potential, enabling individuals and teams to achieve their best work effortlessly.',
    color: 'from-indigo-500 to-indigo-600',
    highlights: ['Human-centric design', 'Global impact', 'Sustainable growth']
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: 'Our Values',
    description: 'We believe in building products that respect user time, privacy, and intelligence while delivering exceptional value.',
    color: 'from-pink-500 to-pink-600',
    highlights: ['User-first approach', 'Transparency', 'Continuous improvement']
  }
];

const milestones = [
  { year: '2022', title: 'Foundation', description: 'Concept development and initial prototyping', icon: <MdOutlineRocketLaunch /> },
  { year: '2023 Q1', title: 'Beta Launch', description: 'First release with 1,000 early adopters', icon: <FiZap /> },
  { year: '2023 Q3', title: 'Major Update', description: 'Advanced features and team collaboration', icon: <FiTrendingUp /> },
  { year: '2024', title: 'Global Reach', description: 'Expanded to support users in 50+ countries', icon: <FiGlobe /> },
  { year: '2024', title: '10K Milestone', description: 'Celebrated 10,000 active users worldwide', icon: <FiUsers /> }
];

const principles = [
  {
    title: 'Simplicity First',
    description: 'We strip away complexity to reveal elegant solutions.',
    icon: <MdOutlineAutoAwesome />
  },
  {
    title: 'Privacy by Design',
    description: 'Your data belongs to you. We implement security at every layer.',
    icon: <MdOutlineSecurity />
  },
  {
    title: 'Continuous Innovation',
    description: 'We evolve with user needs and technological advancements.',
    icon: <FiTrendingUp />
  },
  {
    title: 'Ethical Practices',
    description: 'We build products that do good while doing well.',
    icon: <MdOutlineHandshake />
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">About TaskFlow</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Redefining <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Productivity</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We're building the future of task management—where powerful features meet intuitive design 
          to help you focus on what truly matters.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-gray-900">10K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-gray-900">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-gray-900">4.9</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
            <FiAward className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            At TaskFlow, we believe that exceptional task management shouldn't be complicated. 
            We're dedicated to creating tools that are both powerful and accessible, helping individuals 
            and teams achieve more with less friction.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <FiLock className="w-6 h-6 mb-2" />
              <div className="font-bold">Privacy First</div>
              <div className="text-sm text-purple-200">Your data, your control</div>
            </div>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <FiZap className="w-6 h-6 mb-2" />
              <div className="font-bold">Lightning Fast</div>
              <div className="text-sm text-purple-200">Instant response times</div>
            </div>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <FiGlobe className="w-6 h-6 mb-2" />
              <div className="font-bold">Global Scale</div>
              <div className="text-sm text-purple-200">Available worldwide</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values shape every decision we make and every feature we build.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-6`}>
                <div className="text-white">{value.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 mb-6">{value.description}</p>
              <div className="space-y-2">
                {value.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to global platform, our commitment to innovation has never wavered.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-indigo-200 to-purple-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} style={{ maxWidth: '400px' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-600">
                        {milestone.icon}
                      </div>
                      <div className="text-sm font-semibold text-purple-600">{milestone.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-20">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Philosophy</h2>
              <p className="text-gray-600">
                Every pixel, every interaction is crafted with purpose and precision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-600 mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full mb-6">
          <FiStar className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Join Thousands of Productive Users</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Productivity?
        </h2>
        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Experience task management that feels effortless, powerful, and designed for real people.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Cancel anytime
          </div>
        </div>
      </motion.div>
    </div>
  );
}