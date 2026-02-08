"use client";
import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { getTasks } from "@/lib/api";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiLogOut, 
  FiPlusCircle, 
  FiCheckCircle, 
  FiCalendar, 
  FiTrendingUp,
  FiUser,
  FiBell,
  FiSettings
} from "react-icons/fi";
import { MdOutlineDashboard, MdOutlineTask } from "react-icons/md";

export default function TodoPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0
  });

  // Fetch tasks for the logged-in user
  const fetchTasks = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const data = await getTasks(userId);
      setTasks(data);
      
      // Calculate stats
      const total = data.length;
      const completed = data.filter((task: any) => task.completed).length;
      const pending = total - completed;
      const overdue = data.filter((task: any) => 
        !task.completed && task.dueDate && new Date(task.dueDate) < new Date()
      ).length;
      
      setStats({ total, completed, pending, overdue });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check login
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      router.push("/login");
    } else {
      setUserId(id);
      fetchTasks();
    }
  }, []);

  if (!userId) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <FiCheckCircle className="w-8 h-8 text-white animate-pulse" />
        </div>
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  );

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/");
  };

  const filteredTasks = tasks.filter((task: any) => {
    switch(activeTab) {
      case 'completed': return task.completed;
      case 'pending': return !task.completed;
      case 'today': 
        const today = new Date().toDateString();
        return new Date(task.dueDate).toDateString() === today;
      default: return true;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <MdOutlineTask className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  TaskFlow Dashboard
                </h1>
                <p className="text-xs text-gray-500">Productivity at your fingertips</p>
              </div>
            </div>

            {/* User & Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <FiUser className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Welcome back</p>
                    <p className="text-xs text-gray-600">User ID: {userId?.slice(0, 8)}...</p>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                  <FiBell className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                  <FiSettings className="w-5 h-5" />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                <FiLogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Tasks</p>
                <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <MdOutlineTask className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(stats.total > 0 ? stats.completed / stats.total : 0) * 100}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-gray-800">{stats.completed}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <FiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-medium text-green-600">
                {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}% completion rate
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-gray-800">{stats.pending}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <FiCalendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-medium text-blue-600">
                {stats.total > 0 ? Math.round((stats.pending / stats.total) * 100) : 0}% remaining
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Overdue</p>
                <p className="text-3xl font-bold text-gray-800">{stats.overdue}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <FiTrendingUp className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-medium text-red-600">
                {stats.total > 0 ? Math.round((stats.overdue / stats.total) * 100) : 0}% overdue
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Task Form & Tabs */}
          <div className="lg:col-span-2">
            {/* Task Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                  <FiPlusCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Add New Task</h2>
                  <p className="text-sm text-gray-600">Organize your work and life</p>
                </div>
              </div>
              
              <TaskForm userId={userId} onTaskAdded={fetchTasks} />
            </motion.div>

            {/* Filter Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'all', label: 'All Tasks', count: tasks.length },
                  { id: 'pending', label: 'Pending', count: tasks.filter((t: any) => !t.completed).length },
                  { id: 'completed', label: 'Completed', count: tasks.filter((t: any) => t.completed).length },
                  { id: 'today', label: 'Due Today', count: tasks.filter((t: any) => 
                    new Date(t.dueDate).toDateString() === new Date().toDateString()
                  ).length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeTab === tab.id ? 'bg-white/20' : 'bg-gray-300'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Task List */}
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-600">Loading your tasks...</p>
                  </motion.div>
                ) : filteredTasks.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MdOutlineTask className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No tasks found</h3>
                    <p className="text-gray-600 mb-4">
                      {activeTab === 'all' 
                        ? "Get started by adding your first task!" 
                        : `No ${activeTab} tasks found`}
                    </p>
                    <button 
                      onClick={() => setActiveTab('all')}
                      className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                      View all tasks
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TaskList userId={userId} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Productivity & Tips */}
          <div className="space-y-6">
            {/* Productivity Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-4">Your Productivity</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-purple-200">Completion Progress</span>
                    <span className="font-bold">
                      {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
                    </span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}%` }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.completed}</div>
                    <div className="text-xs text-purple-200">Done</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.pending}</div>
                    <div className="text-xs text-purple-200">To Do</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">💡 Productivity Tips</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-purple-600">1</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Break large tasks into smaller, actionable steps for better focus.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-purple-600">2</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Use the 2-minute rule: if it takes less than 2 minutes, do it now!
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-purple-600">3</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Prioritize tasks with deadlines to avoid last-minute stress.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={fetchTasks}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 rounded-lg text-purple-600 font-medium flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <FiCheckCircle className="w-4 h-4" />
                  Refresh Tasks
                </button>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <FiTrendingUp className="w-4 h-4" />
                  Scroll to Top
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}