import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const randomStep = () => Math.floor(Math.random() * 3) + 1; // 1-3%

const PreloaderGate: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);

  const showEnter = progress >= 100;

  // Simulate game-like loading to 100%
  useEffect(() => {
    if (entered) return;

    let raf = 0;
    let current = 0;

    const tick = () => {
      // Ease slower after 80%
      const step = current < 80 ? randomStep() : 1;
      current = Math.min(100, current + step);
      setProgress(current);
      if (current < 100) {
        raf = window.setTimeout(tick, 40);
      }
    };

    tick();

    // Lock scroll while gate is visible
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      if (raf) window.clearTimeout(raf);
    };
  }, [entered]);

  const handleEnter = () => {
    setEntered(true);
  };

  if (entered) return null;

  return (
    <div className="fixed inset-0 z-[100000] bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      <div className="relative h-full w-full flex items-center justify-center px-6 animate-fade-in">
        <div className="w-full max-w-xl text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">Avinya</h1>
            <p className="text-sm text-muted-foreground tracking-widest uppercase">Initializing experience</p>
          </div>

          <div className="space-y-4">
            <div className="h-3 w-full rounded-full bg-muted overflow-hidden border border-primary/20">
              <div
                className="h-full bg-primary transition-all duration-200"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              />
            </div>
            <div className="text-sm font-medium tracking-wider">{progress}%</div>
          </div>

          <div>
            <Button
              variant={showEnter ? "default" : "secondary"}
              disabled={!showEnter}
              onClick={handleEnter}
              className="w-40 h-11 hover-scale"
              aria-label="Enter Avinya"
            >
              {showEnter ? "Enter" : "Loading..."}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderGate;
