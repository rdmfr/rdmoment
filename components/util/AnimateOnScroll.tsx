'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClassName: string;
  observerOptions?: IntersectionObserverInit;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className,
  animationClassName,
  observerOptions = { threshold: 0.1, triggerOnce: true },
  delay = 0,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [observerOptions]);

  return (
    <div ref={ref} className={cn(className, 'transition-opacity duration-1000', isVisible ? 'opacity-100' : 'opacity-0')}>
      {isVisible && (
        <div
          className={animationClassName}
          style={{ animationDelay: `${delay}ms` }}
        >
          {children}
        </div>
      )}
    </div>
  );
}