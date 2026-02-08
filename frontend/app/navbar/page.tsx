// components/SimpleNavbar.tsx
'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiCheckCircle, FiHome } from "react-icons/fi";

export default function SimpleNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTodoRedirect = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      router.push("/todo");
    } else {
      alert("Please login first");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <FiCheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">TodoApp</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              <FiHome className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push("/about")}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              About
            </button>
            <button
              onClick={() => router.push("/features")}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => router.push("/tutorial")}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              How to Use
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium"
            >
              Contact
            </button>
            
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              Signup
            </button>
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
            >
              Login
            </button>
            <button
              onClick={handleTodoRedirect}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium"
            >
              Todo App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <button
                onClick={() => {
                  router.push("/");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 rounded-lg"
              >
                <FiHome className="w-5 h-5 text-gray-600" />
                Home
              </button>
              <button
                onClick={() => {
                  router.push("/about");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => {
                  router.push("/features");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg"
              >
                Features
              </button>
              <button
                onClick={() => {
                  router.push("/tutorial");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg"
              >
                How to Use
              </button>
              <button
                onClick={() => {
                  router.push("/contact");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg"
              >
                Contact
              </button>
              
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => {
                    router.push("/signup");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium"
                >
                  Signup
                </button>
                <button
                  onClick={() => {
                    router.push("/login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleTodoRedirect();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-purple-500 text-white rounded-lg font-medium"
                >
                  Todo App
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}