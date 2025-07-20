import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiDashboardLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const sidebarVariants = {
    open: {
      x: 0,
      width: '240px',
      transition: { duration: 0.3, type: 'spring', stiffness: 100 }
    },
    closed: {
      x: -240,
      width: 0,
      transition: { duration: 0.3, type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="flex h-screen bg-ui-background">
      {/* Sidebar */}
      <AnimatePresence>
        <motion.div
          initial="open"
          animate={isSidebarOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
          className="fixed left-0 top-0 h-full bg-ui-backgroundLight shadow-lg z-20"
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-ui-border">
              <h1 className="text-2xl font-bold gradient-text">Security Dashboard</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <button
                onClick={() => navigate('/domains')}
                className="w-full flex items-center space-x-3 p-3 rounded-lg text-ui-text-secondary hover:bg-ui-backgroundAlt hover:text-ui-text-primary transition-all duration-200"
              >
                <RiDashboardLine className="text-xl" />
                <span>My Domains</span>
              </button>
            </nav>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-ui-accent-primary text-ui-text-primary shadow-lg hover:bg-ui-accent-hover transition-colors duration-200 lg:hidden"
      >
        {isSidebarOpen ? (
          <RiCloseLine className="text-2xl" />
        ) : (
          <RiMenuLine className="text-2xl" />
        )}
      </button>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Layout; 