import ErrorBoundary from './components/ErrorBoundary';
import { BuggyCounter } from './components/BuggyCounter';
import { Shield, AlertOctagon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React 19 Error Boundaries</h1>
          <div className="flex items-center justify-center gap-2 text-yellow-600">
            <AlertOctagon className="w-5 h-5" />
            <p>Try incrementing any counter to 5 to see error handling in action</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">With Error Boundary</h2>
              <p className="text-blue-600 text-sm mb-4">
                This counter is wrapped in an Error Boundary that will catch and handle the error gracefully
              </p>
            </div>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-red-800 mb-2">Without Error Boundary</h2>
              <p className="text-red-600 text-sm mb-4">
                This counter will crash the entire app when it errors
              </p>
            </div>
            <BuggyCounter threshold={5} />
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">How Error Boundaries Work in React 19</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• Error Boundaries catch errors during rendering, in lifecycle methods, and in constructors</li>
            <li>• They do not catch errors in event handlers or asynchronous code</li>
            <li>• Only class components can be Error Boundaries (even in React 19)</li>
            <li>• The left counter demonstrates graceful error recovery</li>
            <li>• The right counter shows what happens without error boundaries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;