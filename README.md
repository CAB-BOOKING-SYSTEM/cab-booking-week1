Hướng dẫn chạy bài
    git clone [link]
    npm install
    npm start
React Demo: ES6, JSX & Fragments
1. ES6 (ECMAScript 2015)
Const Variables - Biến Hằng
![alt text](public/img/1.png)
    const: Khai báo biến không thể gán lại giá trị
    Dùng cho dữ liệu không thay đổi trong suốt vòng đời component
Template Literals - Chuỗi Mẫu
![alt text](public/img/2.png)
    Backticks (`) cho phép nhúng biến với ${}
    Kết quả: Hello John
    Ngắn gọn hơn "Hello " + name
Destructuring - Phân Rã
![alt text](public/img/3.png)
    Lấy trực tiếp thuộc tính từ object: {name, age}
    Kết quả: Alice (25), Bob (30)
Spread Operator - Toán Tử Trải Rộng
![alt text](public/img/4.png)
    Sao chép mảng cũ và thêm phần tử mới
    Kết quả: Mảng có 3 user
Arrow Functions - Hàm Mũi Tên
![alt text](public/img/5.png)
    Cú pháp ngắn gọn, không có function keyword
    Tự động bind this
Default Parameters - Tham Số Mặc Định
![alt text](public/img/6.png)
    Giá trị mặc định khi không truyền tham số
    Ví dụ: calculateTotal() → 110 (dùng giá trị mặc định)

 2. JSX (JavaScript XML)
 JavaScript trong JSX
 ![alt text](public/img/7.png)
    {} cho phép nhúng bất kỳ biểu thức JavaScript nào
    Tính toán trực tiếp trong JSX
Event Handlers - Xử Lý Sự Kiện
![alt text](public/img/8.png)
    Gắn hàm trực tiếp vào thuộc tính sự kiện
    Viết camelCase: onClick, onChange, onSubmit
Conditional Rendering - Render Có Điều Kiện
![alt text](public/img/9.png)
    Toán tử ternary ? : cho if-else ngắn gọn
    Logic: Nếu có user → hiển thị ✅, ngược lại → ❌
Inline Styles - Style Trực Tiếp
![alt text](public/img/10.png)
    Style là JavaScript object với camelCase
    Outer {} cho JS, inner {} cho object CSS
className Thay Vì class
![alt text](public/img/11.png)
    Dùng className trong JSX (tránh từ khóa class của JS)
    Áp dụng CSS từ file .css

3. React Fragments - TRỌNG TÂM DEMO NÀY

Demo 1: Fragment Trong Table
![alt text](public/img/12.png)
Tại sao cần Fragment trong table?
    HTML cấm <div> trong <tr>
    Fragment nhóm các <td> mà không thêm node
    DOM sạch: chỉ có <tr><td>...</td></tr>
Demo 2: Fragment Với Key
![alt text](public/img/13.png)
Khi nào dùng <React.Fragment> thay vì <>?
    Khi cần thuộc tính như key trong list
    key giúp React tối ưu việc cập nhật list
