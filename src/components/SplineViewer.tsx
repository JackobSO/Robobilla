import React, { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

// Extend the global JSX namespace for the spline-viewer element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

const SplineViewer: React.FC<SplineViewerProps> = ({ url, className = '', style = {} }) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src*="spline-viewer"]')) {
      setIsScriptLoaded(true);
      return;
    }

    // Create and load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.43/build/spline-viewer.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Spline viewer script loaded successfully');
      setIsScriptLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
      setHasError(true);
    };

    document.head.appendChild(script);
    scriptRef.current = script;

    // Cleanup function
    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  if (hasError) {
    return (
      <div className={`spline-viewer-container ${className}`} style={style}>
        <div className="flex items-center justify-center h-full min-h-[400px] bg-gray-100 rounded-xl">
          <div className="text-center">
            <p className="text-gray-500">Failed to load 3D viewer</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`spline-viewer-container ${className}`} style={style}>
      {isScriptLoaded && (
        <spline-viewer 
          url={url}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '400px',
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        />
      )}
      {!isScriptLoaded && (
        <div className="flex items-center justify-center h-full min-h-[400px] bg-gray-100 rounded-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-gray-500">Loading 3D viewer...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplineViewer;
