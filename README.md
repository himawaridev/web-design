# frontend
# backend
# javascript
# nodejs
# ejs
# css
# sql

Step one: install express dotenv ejs mysql2 nodemon
syntax is: npm install express dotenv ejs mysql2 nodemon (new version)

download: Docker:  https://docs.docker.com/desktop/install/windows-install/ (new version - 64bit)
          DBeaver: https://dbeaver.io/download/ (new version - 64bit)
          Khởi tạo cơ sở dữ liệu bằng DBeaver và đảm bảo Docker đã được khởi chạy (docker chỉ là phần mêm tạo môi trường cho cơ sở dữ liệu)

          Dowload file sql.yml: tạo một thư mục mới và tải file sql.yml này về thư mục vừa tạo https://drive.google.com/file/d/1DfSjZTM8RYXbKCde5gRg_HYl3YJWNtGa/view
          sau đó chạy cmd trong thư mục vừa tạo với câu lệnh 'docker compose -f mysql.yml -p nodejs-sql up -d' và đợi cài đặt
          Sau đó: mở Dbeaver lên và tạo connection chạy trên PORT 3307 Username root Password 123456
Open terminal on VScode: run code with syntax nodemon src/server.js
          

