import React from 'react';
import SplineViewer from './SplineViewer';

const SplineSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Experience Atlas in 3D
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interact with our humanoid companion in an immersive 3D environment. 
            Explore every detail and see how Atlas moves and responds.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background gradient for visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-50"></div>
            
            {/* Main 3D viewer container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <SplineViewer 
                url="https://prod.spline.design/UHST75kFS6m4GLpf/scene.splinecode"
                className="w-full h-[600px] sm:h-[700px] lg:h-[800px]"
                style={{
                  minHeight: '600px',
                  maxHeight: '800px'
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20"></div>
          </div>
        </div>
        
        {/* Additional info or controls */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            Use your mouse to rotate, zoom, and interact with the 3D model
          </p>
        </div>
      </div>
    </section>
  );
};

export default SplineSection;



