// Hiển thị thông báo toast
export const showToast = (message: string, type: 'success' | 'error' | 'info'): void => {
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerText = message;
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 3000); // Xóa toast sau 3 giây
    }
  };
  
  // Cuộn trang lên đầu
  export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Kiểm tra nếu thiết bị là mobile
  export const isMobileDevice = (): boolean => {
    return window.innerWidth <= 768;
  };
  