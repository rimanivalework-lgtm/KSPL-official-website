// Navigation TypeScript interfaces for better type safety

export interface NavigationItem {
  name: string;
  url: string;
}

export interface NavigationColumn {
  title: string;
  items: NavigationItem[];
}

export interface NavigationData {
  about: NavigationItem[];
  products: {
    column1: NavigationItem[];
    column2: NavigationItem[];
    column3: NavigationItem[];
  };
  services: {
    column1: NavigationColumn;
    column2: NavigationColumn;
    column3: NavigationColumn;
    column4: NavigationColumn;
  };
  portfolio: {
    column1: NavigationColumn;
    column2: NavigationColumn;
  };
}

export interface DropdownState {
  isMenuOpen: boolean;
  openDropdown: string | null;
}

export interface NavigationActions {
  setIsMenuOpen: (open: boolean) => void;
  setOpenDropdown: (dropdown: string | null) => void;
  handleDropdownToggle: (key: string) => void;
}
