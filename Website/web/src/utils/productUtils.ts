import { I_Product } from "@/models/productTypes";

// Lọc sản phẩm theo danh mục
export const filterProductsByCategory = (products: I_Product[], categoryId: string): I_Product[] => {
    return products.filter(product => product.categoryId === categoryId);
  };
  
  // Sắp xếp sản phẩm theo giá (tăng dần)
  export const sortProductsByPrice = (products: I_Product[]): I_Product[] => {
    return [...products].sort((a, b) => a.price - b.price);
  };
  
  // Sắp xếp sản phẩm theo tên
  export const sortProductsByName = (products: I_Product[]): I_Product[] => {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // Tìm kiếm sản phẩm theo tên
  export const searchProducts = (products: I_Product[], searchTerm: string): I_Product[] => {
    return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };
  