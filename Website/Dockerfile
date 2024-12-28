# Chọn image Node.js chính thức
FROM node:20.15.0

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json từ thư mục Website/web vào container
COPY Website/web/package.json Website/web/package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn từ thư mục Website/web vào container
COPY Website/web/ ./

# Build ứng dụng Next.js
RUN npm run build

# Expose cổng 3000 (Next.js mặc định sử dụng cổng này)
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["npm", "start"]
