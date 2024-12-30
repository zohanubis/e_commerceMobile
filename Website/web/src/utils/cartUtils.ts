import { I_CartItem } from "@/models/cardTypes";
import { I_Product } from "@/models/productTypes";

// Thêm sản phẩm vào giỏ hàng
export const addToCart = (cartItems: I_CartItem[], product: I_Product): I_CartItem[] => {
    const existingItemIndex = cartItems.findIndex(item => item.productId === product.id);
    
    if (existingItemIndex > -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
      cartItems.push({ productId: product.id, quantity: 1 });
    }
  
    return cartItems;
  };
  
  // Cập nhật số lượng sản phẩm trong giỏ hàng
  export const updateCartItemQuantity = (cartItems: I_CartItem[], productId: string, quantity: number): I_CartItem[] => {
    return cartItems.map(item => item.productId === productId ? { ...item, quantity } : item);
  };
  
  // Tính tổng giá trị giỏ hàng
  export const calculateCartTotal = (cartItems: I_CartItem[], products: I_Product[]): number => {
    return cartItems.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };
  
  // Xóa sản phẩm khỏi giỏ hàng
  export const removeFromCart = (cartItems: I_CartItem[], productId: string): I_CartItem[] => {
    return cartItems.filter(item => item.productId !== productId);
  };
  