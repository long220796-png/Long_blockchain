import React from "react";

function Guide() {
  return (
    <div style={{ minHeight: "100vh", background: "#46608a", color: "#ffd600", padding: 32 }}>
      <div style={{ maxWidth: 600, margin: "40px auto", background: "#c9c5bb", borderRadius: 14, boxShadow: "0 2px 12px 0 rgba(25, 118, 210, 0.06)", padding: 28 }}>
        <h2 style={{ color: "#ffd600", textAlign: "center", marginBottom: 24 }}>Hướng dẫn sử dụng DApp từ thiện</h2>
        <ol style={{ color: "#222", fontSize: 17, lineHeight: 1.7 }}>
          <li><b>Kết nối ví:</b> Nhấn nút "Kết nối MetaMask" để liên kết ví của bạn với DApp.</li>
          <li><b>Chọn dự án:</b> Xem danh sách các dự án từ thiện và nhấn vào dự án bạn muốn ủng hộ.</li>
          <li><b>Nhập số tiền MTK:</b> Điền số lượng token MTK bạn muốn quyên góp cho dự án.</li>
          <li><b>Nhấn "Quyên góp":</b> Xác nhận giao dịch trên ví để hoàn tất quyên góp.</li>
          <li><b>Kiểm tra lịch sử:</b> Sau khi quyên góp, bạn có thể nhấn "Xem lịch sử" để kiểm tra giao dịch trên HashScan.</li>
        </ol>
        <div style={{ color: "#d32f2f", marginTop: 24, fontWeight: 600 }}>
          Lưu ý: Số liệu trên thanh tiến trình chỉ mang tính minh họa. Vui lòng kiểm tra số dư thực tế và lịch sử giao dịch trên HashScan để đảm bảo minh bạch.
        </div>
      </div>
    </div>
  );
}

export default Guide;
