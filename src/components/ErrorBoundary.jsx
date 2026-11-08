import React from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF9F5] flex items-center justify-center p-6 text-slate-800">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-amber-200 shadow-luxury text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              Something went unexpected
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We encountered an issue rendering this section. Our team has been notified.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2 shadow-soft-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <a
                href="/"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

