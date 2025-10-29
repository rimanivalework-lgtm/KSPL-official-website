import { useState, useCallback, useRef } from 'react';
import { DropdownState, NavigationActions } from '@/types/navigation';

export const useNavigation = (): DropdownState & NavigationActions => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = useCallback((key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  }, [openDropdown]);

  return {
    // State
    isMenuOpen,
    openDropdown,
    // Actions
    setIsMenuOpen,
    setOpenDropdown,
    handleDropdownToggle,
  };
};
