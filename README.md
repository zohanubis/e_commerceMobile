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
- **React.js** (integrated with Next.js for server-side rendering, static site generation, and API routes)
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
    <summary>Vietnamese</sumarry>

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
- **React.js** (tích hợp với Next.js để render phía server, tạo trang tĩnh và API routes)
- **Apollo Client** (quản lý dữ liệu GraphQL phía frontend, đơn giản hóa việc tương tác với API)
- **TypeScript** (đảm bảo tính an toàn kiểu dữ liệu trên cả frontend và backend, giảm thiểu lỗi tại thời gian chạy)
- **Jest và React Testing Library** (dùng để kiểm tra đơn vị, kiểm tra các component, và kiểm tra end-to-end các component frontend)

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
