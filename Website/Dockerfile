# Chọn image Node.js chính thức
FROM node:20.15.0

# Cài đặt pnpm
RUN npm install -g pnpm

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và pnpm-lock.yaml vào container
# Cập nhật việc sử dụng pnpm-lock.yaml thay vì package-lock.json
COPY Website/web/package.json Website/web/pnpm-lock.yaml ./

# Cài đặt dependencies với pnpm
RUN pnpm install --frozen-lockfile

# Copy toàn bộ mã nguồn từ thư mục Website/web vào container
COPY Website/web/ ./

# Build ứng dụng Next.js
RUN pnpm build

# Expose cổng 3000 (Next.js mặc định sử dụng cổng này)
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["pnpm", "start"]
