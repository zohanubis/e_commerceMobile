# e_commerceMobile
<details>
    <summary>English</summary>

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Commands](#commands)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project is an e-commerce mobile application built with a modern tech stack to ensure scalability, performance, and maintainability. It combines powerful frontend and backend technologies to deliver a seamless user experience and efficient management of data and resources.

## Technologies
### Frontend:
- **Next.js** (a React.js framework used for server-side rendering, static site generation, and API routes)
- **Apollo Client** (for managing GraphQL data on the frontend, simplifies API interaction)
- **TypeScript** (ensures type safety across the frontend and backend, reducing runtime errors)
- **Jest and React Testing Library** (for unit tests, component tests, and end-to-end testing of frontend components)

### Backend:
- **Node.js** (runtime environment for running backend APIs, using Express.js, Koa.js, or Next.js API routes)
- **GraphQL** (facilitates efficient communication between frontend and backend with flexible querying)
- **MongoDB** (NoSQL database, chosen for flexibility and scalability in storing e-commerce data)
- **Redis** (used for caching and handling asynchronous tasks, reducing database load and improving performance)
- **JWT (JSON Web Token)** (for secure user authentication and authorization)
- **Nodemailer** (for sending emails from the backend, such as order confirmations)
- **Mongoose** (ORM for MongoDB, provides a schema-based solution to interact with MongoDB)
- **Bcrypt.js** (for securely hashing passwords)

### DevOps & Deployment:
- **Docker** (for containerizing the application, including services like Redis and MongoDB, ensuring consistent environments across development and production)
- **Kubernetes** (used for container orchestration, especially when scaling the application across multiple nodes)
- **Nginx** (reverse proxy and load balancer to distribute traffic effectively)

### CI/CD:
- **GitHub Actions** or **GitLab CI** (automates the build, testing, and deployment process, ensuring a seamless delivery pipeline)

## Project Setup
### Installation
Follow these steps to get the project up and running on your local machine.

1. **Clone the repository**:
    ```sh
    git clone https://github.com/zohanubis/e_commerceMobile.git
    cd e_commerceMobile
    ```

2. **Install dependencies using pnpm**:
    ```sh
    pnpm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root directory and add the necessary environment variables (see [Configuration](#configuration)).

4. **Start Docker containers for MongoDB and Redis**:
    ```sh
    docker-compose up -d
    ```

## Usage
### Running the project locally
1. **Start the development server**:
    ```sh
    pnpm dev
    ```

2. **Open your browser** and navigate to `http://localhost:3000` to view the application.

### Running the backend server
1. **Start the backend server**:
    ```sh
    pnpm start:server
    ```

### Running in Development Mode with Docker
- If you want to run the application in development mode with Docker, use the following command:
    ```sh
    docker-compose up --build
    ```

## Configuration
Create a `.env` file in the root directory and add the following environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/yourdbname
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.your-email-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

## Commands
- Run the development server:
    ```sh
    pnpm dev
    ```
- Build the project:
    ```sh
    pnpm build
    ```
- Start the application:
    ```sh
    pnpm start
    ```

## Testing
Run tests with Jest and React Testing Library:
```sh
pnpm test
```

## Deployment
### Using Docker
1. Build Docker images:
    ```sh
    docker-compose build
    ```
2. Start Docker containers:
    ```sh
    docker-compose up -d
    ```

### Using Kubernetes
1. Apply Kubernetes configurations:
    ```sh
    kubectl apply -f k8s/
    ```

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add your feature"
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Create a pull request.

## License
This project is licensed under the MIT License. For more details, please refer to the LICENSE file.

## Contact
For any inquiries, please contact the project maintainer at [zohanubis](mailto:phdh141003@gmail.com).

</details>

<details>
    <summary>Vietnamese</summary>
    
## Mục lục
- [Giới thiệu](#giới-thiệu)
- [Công nghệ](#công-nghệ)
- [Cài đặt dự án](#cài-đặt-dự-án)
- [Sử dụng](#sử-dụng)
- [Cấu hình](#cấu-hình)
- [Lệnh](#lệnh)
- [Kiểm thử](#kiểm-thử)
- [Triển khai](#triển-khai)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)
- [Liên hệ](#liên-hệ)

## Giới thiệu
Dự án này là một ứng dụng thương mại điện tử di động được xây dựng với một stack công nghệ hiện đại để đảm bảo khả năng mở rộng, hiệu suất và khả năng bảo trì. Nó kết hợp các công nghệ frontend và backend mạnh mẽ để mang đến trải nghiệm người dùng mượt mà và quản lý dữ liệu, tài nguyên hiệu quả.

## Công nghệ
### Frontend:
- **Next.js** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="16" height="16">
  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
</svg>
 (framework của React.js, được sử dụng cho server-side rendering, static site generation, và API routes)

- **Apollo Client** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="16" height="16">
  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c35.3 0 64-28.7 64-64S99.3 0 64 0zm0 116c-28.5 0-52-23.5-52-52S35.5 12 64 12c28.5 0 52 23.5 52 52s-23.5 52-52 52zm-11.6-58.8c-.9 0-1.8-.1-2.7-.3l-6.3 6.3c.6 2 2.3 3.3 4.2 3.3 2.4 0 4.5-1.5 5.4-3.7 2.2-.5 4.2-1.7 5.8-3.3l-6.9-7.1c-1.8 1.2-3.9 1.9-6.1 1.9z"/>
</svg>
 (quản lý dữ liệu GraphQL phía frontend, đơn giản hóa việc tương tác với API)
- **TypeScript** <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="16" height="16">
  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
  <path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/>
</svg>
 (đảm bảo tính an toàn kiểu dữ liệu trên cả frontend và backend, giảm thiểu lỗi tại thời gian chạy)
- **Jest <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="16" height="16">
  <path fill="#99425B" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.547 5.391-5.493 8.708z"/>
</svg>
 và React Testing Library** (dùng để kiểm tra đơn vị, kiểm tra các component, và kiểm tra end-to-end các component frontend)

### Backend:
- **Node.js** (môi trường chạy cho backend APIs, sử dụng Express.js, Koa.js, hoặc Next.js API routes)
- **GraphQL** (giúp giao tiếp hiệu quả giữa frontend và backend với khả năng truy vấn linh hoạt)
- **MongoDB** (Cơ sở dữ liệu NoSQL, được chọn vì tính linh hoạt và khả năng mở rộng trong việc lưu trữ dữ liệu thương mại điện tử)
- **Redis** (dùng để cache và xử lý các tác vụ bất đồng bộ, giảm tải cho cơ sở dữ liệu và cải thiện hiệu suất)
- **JWT (JSON Web Token)** (đảm bảo xác thực và ủy quyền người dùng an toàn)
- **Nodemailer** (gửi email từ backend, chẳng hạn như xác nhận đơn hàng)
- **Mongoose** (ORM cho MongoDB, cung cấp giải pháp schema-based để tương tác với MongoDB)
- **Bcrypt.js** (mã hóa mật khẩu an toàn)

### DevOps & Triển khai:
- **Docker** (container hóa ứng dụng, bao gồm các dịch vụ như Redis và MongoDB, đảm bảo môi trường đồng nhất giữa phát triển và sản xuất)
- **Kubernetes** (dùng cho orchestration container, đặc biệt khi mở rộng ứng dụng trên nhiều nút)
- **Nginx** (reverse proxy và cân bằng tải để phân phối lưu lượng hiệu quả)

### CI/CD:
- **GitHub Actions** hoặc **GitLab CI** (tự động hóa quy trình build, kiểm tra và triển khai, đảm bảo pipeline giao hàng mượt mà)

## Cài đặt dự án
### Cài đặt
Làm theo các bước sau để cài đặt và chạy dự án trên máy tính của bạn.

1. **Clone repository**:
    ```sh
    git clone https://github.com/zohanubis/e_commerceMobile.git
    cd e_commerceMobile
    ```

2. **Cài đặt dependencies bằng pnpm**:
    ```sh
    pnpm install
    ```

3. **Cấu hình các biến môi trường**:
    - Tạo một tệp `.env` trong thư mục gốc và thêm các biến môi trường cần thiết (xem [Cấu hình](#cấu-hình)).

4. **Khởi động Docker containers cho MongoDB và Redis**:
    ```sh
    docker-compose up -d
    ```

## Sử dụng
### Chạy dự án tại local
1. **Khởi động server phát triển**:
    ```sh
    pnpm dev
    ```

2. **Mở trình duyệt** và truy cập `http://localhost:3000` để xem ứng dụng.

### Chạy server backend
1. **Khởi động server backend**:
    ```sh
    pnpm start:server
    ```

### Chạy trong chế độ phát triển với Docker
- Nếu bạn muốn chạy ứng dụng trong chế độ phát triển với Docker, dùng lệnh sau:
    ```sh
    docker-compose up --build
    ```

## Cấu hình
Tạo tệp `.env` trong thư mục gốc và thêm các biến môi trường sau:

```env
MONGODB_URI=mongodb://localhost:27017/yourdbname
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.your-email-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```
## Lệnh
Chạy server phát triển:
```sh
    pnpm dev
```
Build dự án:
```sh
    pnpm build
```
Khởi động ứng dụng:
```sh
    pnpm start
```

## Kiểm thử
Chạy các bài kiểm thử với Jest và React Testing Library:
```sh
    pnpm test
```
## Triển khai
### Sử dụng Docker
1. Build Docker images:
    ```sh
    docker-compose build
    ```
2. Khởi động Docker containers:
    ```sh
    docker-compose up -d
    ```

### Sử dụng Kubernetes
1. Áp dụng cấu hình Kubernetes:
    ```sh
    kubectl apply -f k8s/
    ```
## Đóng gói

1. Fork repository.
2. Tạo nhánh mới:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Thực hiện thay đổi và commit chúng:
    ```sh
    git commit -m "Add your feature"
    ```
4. Push lên nhánh:
    ```sh
    git push origin feature/your-feature
    ```
5. Tạo pull request.

## Giấy phép
Dự án này được cấp phép theo giấy phép MIT. Để biết thêm chi tiết, vui lòng tham khảo tệp LICENSE.

## Liên hệ
Mọi thắc mắc xin vui lòng liên hệ với người quản lý dự án qua email [zohanubis](mailto:phdh141003@gmail.com).

</details>
