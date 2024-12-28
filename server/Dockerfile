# Chọn image Node.js chính thức từ Docker Hub
FROM node:20.15.0

# Cài đặt thư viện và công cụ cần thiết
WORKDIR /app

# Sao chép package.json và package-lock.json để cài đặt dependencies
COPY server/package.json server/package-lock.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn server vào container
COPY server/ .

# Cấu hình biến môi trường cho ứng dụng
ENV NODE_ENV=production

# Mở cổng mà server sẽ chạy
EXPOSE 4000

# Lệnh để khởi chạy server
CMD ["npm", "start"]
