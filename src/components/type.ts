export type MenuItem = {
    id: string;
    name: string;
    price: number;
    description?: string;
  };
  
  export type MenuSection = {
    title: string;
    category: string;
    items: MenuItem[];
  };
  