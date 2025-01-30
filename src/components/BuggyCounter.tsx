import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  initialCount?: number;
  threshold?: number;
}

export function BuggyCounter({ initialCount = 0, threshold = 5 }: Props) {
  const [count, setCount] = useState(initialCount);

  if (count === threshold) {
    throw new Error(`Counter reached ${threshold}! This is an intentional error.`);
  }

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-yellow-500" />
        <p className="text-sm text-yellow-700">Will crash at count: {threshold}</p>
      </div>
      
      <div className="text-4xl font-bold text-gray-800 mb-6">{count}</div>
      
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(c => Math.max(0, c - 1))}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}