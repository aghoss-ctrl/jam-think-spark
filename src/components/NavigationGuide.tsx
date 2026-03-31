import React from 'react';

export default function NavigationGuide() {
  return (
    <div className="rounded-3xl p-8 bg-violet-50 border-2 border-violet-200 shadow-xl">
      <h2 className="text-3xl font-bold text-violet-900 mb-4">Navigation Guide</h2>
      <p className="mb-4 font-medium text-violet-800">FigJam works just like Google Maps:</p>
      <ul className="space-y-3">
        <li><strong>Pinch</strong> to zoom (trackpad/touch)</li>
        <li><strong>Two-finger swipe</strong> to pan around</li>
        <li><strong>Ctrl + Scroll</strong> to zoom with a mouse</li>
      </ul>
    </div>
  );
}
