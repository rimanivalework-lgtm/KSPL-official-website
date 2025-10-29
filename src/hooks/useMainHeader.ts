import { useState } from "react";

export interface UseMainHeaderReturn {
  isMenuOpen: boolean;
  openDropdown: string | null;
  hoveredDropdown: string | null;
  setIsMenuOpen: (open: boolean) => void;
  setOpenDropdown: (dropdown: string | null) => void;
  setHoveredDropdown: (dropdown: string | null) => void;
  handleDropdownToggle: (key: string, open: boolean) => void;
  handleMouseEnter: (key: string) => void;
  handleMouseLeave: () => void;
}

export const useMainHeader = (): UseMainHeaderReturn => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (key: string, open: boolean) => {
    setOpenDropdown(open ? key : null);
  };

  const handleMouseEnter = (key: string) => {
    setHoveredDropdown(key);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return {
    isMenuOpen,
    openDropdown,
    hoveredDropdown,
    setIsMenuOpen,
    setOpenDropdown,
    setHoveredDropdown,
    handleDropdownToggle,
    handleMouseEnter,
    handleMouseLeave,
  };
};