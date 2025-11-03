# 📝 Todo List API

Một RESTful API đơn giản cho ứng dụng **Todo List** — phục vụ mục đích ghi chú và quản lý công việc.  
Dự án được xây dựng theo kiến trúc **Model - Controller - Route**, sử dụng **Node.js**, **Express**, và **MongoDB (Mongoose)**.

---

## 🚀 1. Công nghệ sử dụng

| Công nghệ                               | Mục đích                             | Giải thích ngắn                                                                                   |
| --------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Node.js**                             | Nền tảng chạy JavaScript phía server | Cho phép viết backend bằng JS, non-blocking I/O giúp xử lý nhanh và hiệu quả                      |
| **Express.js**                          | Web framework cho Node.js            | Cung cấp hệ thống router, middleware giúp tạo REST API nhanh gọn                                  |
| **MongoDB + Mongoose**                  | Cơ sở dữ liệu NoSQL                  | Lưu trữ dữ liệu Todo dạng document; Mongoose giúp định nghĩa schema, validate và thao tác dễ dàng |
| **CORS**                                | Middleware bảo mật                   | Cho phép client (frontend) truy cập API từ domain khác                                            |
| **Nodemon**                             | Dev tool                             | Tự động restart server khi có thay đổi mã nguồn (chỉ dùng môi trường dev)                         |
| **Axios** _(ở phía client)_             | Gửi HTTP request đến API             | Thường dùng ở frontend để gọi các endpoint của server                                             |
| **Logger (Winston hoặc custom logger)** | Ghi log hoạt động                    | Ghi lại thông tin request, lỗi và sự kiện phục vụ debug                                           |
| **dotenv** _(tuỳ chọn)_                 | Quản lý biến môi trường              | Dùng để ẩn thông tin nhạy cảm (Mongo URI, PORT, v.v.)                                             |

---

## 🧩 2. Cấu trúc thư mục dự án

todo-list-backend/
├── src/
│ ├── config/
│ │ └── db.js # Kết nối MongoDB
│ ├── controllers/
│ │ └── todo.controller.js # Xử lý logic CRUD
│ ├── models/
│ │ └── todo.model.js # Định nghĩa Schema Todo
│ ├── routes/
│ │ └── todo.routes.js # Định nghĩa endpoint RESTful
│ ├── middlewares/
│ │ ├── errorHandler.js # Xử lý lỗi tập trung
│ │ └── requestLogger.js # Ghi log request
│ ├── utils/
│ │ └── logger.js # Tiện ích ghi log (logInfo, logError)
│ ├── helpers/
│ │ └── checkDuplicate.js # Hàm tái sử dụng kiểm tra trùng title
│ ├── app.js # Cấu hình app Express
│ └── server.js # File khởi động server chính
│
├── .env # Biến môi trường (MONGO_URI, PORT,...)
├── .gitignore # Bỏ qua node_modules, .env,...
├── package.json
└── README.md

---

## ⚙️ 3. Cách hoạt động (Flow tổng quan)

### 🧭 Request Flow

1. **Client (Frontend)** gửi request HTTP → `Express Server`
2. **RequestLogger Middleware** ghi lại thông tin request (method, URL, time,…)
3. Express định tuyến qua file **`routes/todo.routes.js`**
4. Route gọi tới **controller** tương ứng (`todo.controller.js`)
5. Controller xử lý:
   - Validate dữ liệu
   - Giao tiếp với **Model (`todo.model.js`)** qua Mongoose để đọc/ghi MongoDB
6. Trả response JSON về cho client
7. Nếu có lỗi → chuyển qua **ErrorHandler Middleware** để thống nhất phản hồi

---

## 📚 4. Các API endpoint chính

| Method     | Endpoint         | Mô tả                     | Request body                                                  |
| ---------- | ---------------- | ------------------------- | ------------------------------------------------------------- |
| **GET**    | `/api/todos`     | Lấy danh sách tất cả todo | —                                                             |
| **POST**   | `/api/todos`     | Tạo mới một todo          | `{ "title": "...", "description": "..." }`                    |
| **PUT**    | `/api/todos/:id` | Cập nhật todo theo id     | `{ "title": "...", "description": "...", "completed": true }` |
| **DELETE** | `/api/todos/:id` | Xoá todo theo id          | —                                                             |

---

## 🧠 5. Chi tiết logic từng phần

### 🔹 Middleware

- **requestLogger**: theo dõi mọi request đến API → ghi log với thời gian xử lý.
- **errorHandler**: bắt lỗi toàn cục, trả về JSON gọn gàng cho client.

### 🔹 Controller

- Chứa logic chính (CRUD)
- Ghi log mỗi khi thêm, sửa, xoá

### 🔹 Model

- `todo.model.js` định nghĩa schema:
  ```js
  {
    title: String,
    description: String,
    completed: Boolean,
    createdAt: Date,
    updatedAt: Date
  }
  ```
