// Xử lý đăng nhập
document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
    } else {
        document.getElementById("error-msg").textContent = "Tài khoản hoặc mật khẩu không đúng!";
    }
});

// Xử lý chuyển trang
document.getElementById("profile-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Hồ sơ bệnh nhân</h2>
        <p>Họ và tên: Nguyễn Văn A</p>
        <p>Ngày sinh: 01/01/1980</p>
        <p>Giới tính: Nam</p>
        <p>Địa chỉ: 123 Đường ABC, TP.HCM</p>
    `;
});

document.getElementById("messages-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Tin nhắn chờ</h2>
        <p>Không có tin nhắn chờ.</p>
    `;
});

document.getElementById("conditions-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Bệnh lý của tôi</h2>
        <p>Tên bệnh: Viêm phổi</p>
        <p>Tên thuốc đã kê đơn: Amoxicillin</p>
        <p>Tiền sử dị ứng: Không có</p>
    `;
});

document.getElementById("appointments-link").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Lịch hẹn của tôi</h2>
        <p>Ngày hẹn khám: 15/10/2024</p>
    `;
});
