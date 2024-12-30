# Chọn image Node.js chính thức từ Docker Hub
FROM node:20.15.0

# Cài đặt pnpm
RUN npm install -g pnpm

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và pnpm-lock.yaml vào container
# Cập nhật việc sử dụng pnpm-lock.yaml thay vì package-lock.json
COPY server/package.json server/pnpm-lock.yaml ./

# Cài đặt các dependencies bằng pnpm
RUN pnpm install --frozen-lockfile

# Sao chép toàn bộ mã nguồn server vào container
COPY server/ ./

# Cấu hình biến môi trường cho ứng dụng
ENV NODE_ENV=production

# Mở cổng mà server sẽ chạy
EXPOSE 4000

# Lệnh để khởi chạy server
CMD ["pnpm", "start"]
