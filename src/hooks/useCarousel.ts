import { useState, useEffect, useCallback, useRef } from 'react';

export interface ScreenSize {
  size: 'sm' | 'md' | 'lg';
  itemsPerScreen: number;
}

export interface UseCarouselOptions {
  totalItems: number;
  autoPlayInterval?: number;
  enableAutoPlay?: boolean;
}

export interface UseCarouselReturn {
  currentIndex: number;
  screenSize: ScreenSize;
  isAutoPlaying: boolean;
  isHovered: boolean;
  isTransitioning: boolean;
  setIsHovered: (hovered: boolean) => void;
  setIsTransitioning: (transitioning: boolean) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
  startAutoPlay: () => void;
  stopAutoPlay: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useCarousel = ({
  totalItems,
  autoPlayInterval = 5000,
  enableAutoPlay = true
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState<ScreenSize>({ size: 'lg', itemsPerScreen: 3 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(enableAutoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update screen size based on window width
  const updateScreenSize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setScreenSize({ size: 'sm', itemsPerScreen: 1 });
    } else if (width < 1024) {
      setScreenSize({ size: 'md', itemsPerScreen: 2 });
    } else {
      setScreenSize({ size: 'lg', itemsPerScreen: 3 });
    }
  }, []);

  // Auto-play functions
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(totalItems / screenSize.itemsPerScreen));
    }, autoPlayInterval);
    setIsAutoPlaying(true);
  }, [totalItems, screenSize.itemsPerScreen, autoPlayInterval]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % Math.ceil(totalItems / screenSize.itemsPerScreen));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalItems, screenSize.itemsPerScreen, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => 
      prev === 0 
        ? Math.ceil(totalItems / screenSize.itemsPerScreen) - 1 
        : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalItems, screenSize.itemsPerScreen, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  // Mouse event handlers
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (enableAutoPlay) {
      startAutoPlay();
    }
  }, [enableAutoPlay, startAutoPlay]);

  // Effects
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, [updateScreenSize]);

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, isHovered, startAutoPlay, stopAutoPlay]);

  // Reset current index when screen size changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [screenSize]);

  return {
    currentIndex,
    screenSize,
    isAutoPlaying,
    isHovered,
    isTransitioning,
    setIsHovered,
    setIsTransitioning,
    goToNext,
    goToPrevious,
    goToSlide,
    startAutoPlay,
    stopAutoPlay,
    handleMouseEnter,
    handleMouseLeave
  };
};
