// Gửi yêu cầu GET đến API
export const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Lỗi khi tải dữ liệu');
    }
    return response.json();
  };
  
  // Gửi yêu cầu POST đến API
  export const postData = async <T>(url: string, data: object): Promise<T> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Lỗi khi gửi dữ liệu');
    }
    return response.json();
  };
  