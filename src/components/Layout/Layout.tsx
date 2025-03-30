import React from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

interface LayoutProps {
  className?: string;
}

/**
 * Main layout component that wraps the application content
 */
const Layout: React.FC<LayoutProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <ErrorBoundary>
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default Layout;