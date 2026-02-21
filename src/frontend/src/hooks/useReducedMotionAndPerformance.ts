import { useEffect, useState } from 'react';

type PerformanceLevel = 'high' | 'medium' | 'low';

export function useReducedMotionAndPerformance() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [performanceLevel, setPerformanceLevel] = useState<PerformanceLevel>('high');

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Detect performance level based on device capabilities
    const detectPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 768;
      
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 2;
      
      if (isMobile || isSmallScreen || cores < 4) {
        setPerformanceLevel('low');
      } else if (cores < 8) {
        setPerformanceLevel('medium');
      } else {
        setPerformanceLevel('high');
      }
    };

    detectPerformance();
    window.addEventListener('resize', detectPerformance);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', detectPerformance);
    };
  }, []);

  return { reducedMotion, performanceLevel };
}
