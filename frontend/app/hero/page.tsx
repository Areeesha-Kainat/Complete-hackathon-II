"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiUsers, 
  FiTrendingUp,
  FiShield,
  FiSmartphone,
  FiStar
} from "react-icons/fi";
import { MdTaskAlt, MdDashboardCustomize } from "react-icons/md";


export default function Hero() {
  const router = useRouter();

  const handleTodoRedirect = () => {
    const userId = localStorage.getItem("userId");
    if(userId) {
      router.push("/todo");
    } else {
      router.push("/login");
    }
  };

  const features = [
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Smart Task Management",
      description: "Organize tasks with drag-and-drop, priorities, and categories",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Visual analytics and productivity insights",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is encrypted and stored securely",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Access anywhere on any device",
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "500K+", label: "Tasks Completed" },
    { value: "4.9", label: "Rating", suffix: "/5" },
    { value: "99%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Welcome to TaskFlow</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Organize Your <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Work</span> & <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Life</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              The most intuitive task management app that helps you stay focused, organized, and productive. 
              From daily to-dos to complex projects, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/signup")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
              >
                Get Started Free
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/login")}
                className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                Already a User? Login
              </motion.button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-600">10,000+ users</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
              {/* App preview card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <MdTaskAlt className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-800">TaskFlow App</span>
                  </div>
                  <div className="text-sm text-gray-500">Today</div>
                </div>
                
                {/* Sample tasks */}
                <div className="space-y-3">
                  {[
                    { text: "Design project wireframes", completed: true, category: "Work" },
                    { text: "Team meeting at 3 PM", completed: true, category: "Work" },
                    { text: "Buy groceries", completed: false, category: "Personal" },
                    { text: "Morning workout", completed: false, category: "Health" }
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300'
                      }`}>
                        {task.completed && <FiCheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1">
                        <span className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {task.text}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{task.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">3 of 4 tasks completed</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}<span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Stay Productive</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful features designed to help you manage tasks efficiently and achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <MdDashboardCustomize className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Productivity?</h2>
            
            <p className="text-purple-100 mb-8">
              Join thousands of users who have already simplified their task management with TaskFlow.
              No credit card required to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTodoRedirect}
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MdTaskAlt className="w-5 h-5" />
                Go to Todo App
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/features")}
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Explore Features
              </motion.button>
            </div>
            
            <div className="mt-6 text-sm text-purple-200">
              Free 14-day trial • No credit card required • Cancel anytime
            </div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore More</h3>
          <p className="text-gray-600">Learn about TaskFlow and get help</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              title: "About", 
              description: "Learn about our mission and values", 
              path: "/about",
              gradient: "from-purple-500 to-purple-600"
            },
            { 
              title: "Features", 
              description: "Discover powerful productivity tools", 
              path: "/features",
              gradient: "from-indigo-500 to-indigo-600"
            },
            { 
              title: "How to Use", 
              description: "Get started with tutorials", 
              path: "/tutorial",
              gradient: "from-blue-500 to-blue-600"
            },
            { 
              title: "Contact", 
              description: "Get help and support", 
              path: "/contact",
              gradient: "from-green-500 to-green-600"
            }
          ].map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(item.path)}
              className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full mb-4`}></div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center text-sm font-medium text-purple-600">
                <span>Learn more</span>
                <FiArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
}