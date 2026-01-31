import React from "react";
import theme from "../theme";

function About() {
  return (
    <div style={{ ...theme.card, color: theme.colors.text, background: "rgba(255,255,255,0.08)" }}>
      <h2 style={{ color: "#ffd600" }}>Về Chúng Tôi</h2>
      <p><b>Kết Nối Yêu Thương – Lan Tỏa Hy Vọng</b></p>
      <p>
        Trong thời đại công nghệ số, việc trao đi sự tử tế không nhất thiết phải bắt đầu từ những điều lớn lao, mà có thể khởi nguồn ngay từ những chạm tay trên màn hình điện thoại. Với tâm huyết mang đến một cầu nối minh bạch và hiệu quả giữa những tấm lòng hảo tâm và những hoàn cảnh khó khăn, chúng tôi – đội ngũ sáng lập gồm <b>Dương Quang Long</b>, <b>Nguyễn Khánh Duy</b> và <b>Ô Vĩnh Phúc</b> – đã cùng nhau tạo nên ứng dụng thiện nguyện này.
      </p>
      <h3 style={{ color: "#ffd600", marginTop: 24 }}>Sứ mệnh của chúng tôi</h3>
      <p>
        Chúng tôi tin rằng lòng tốt luôn hiện hữu, chỉ cần một công cụ đúng đắn để khơi nguồn. Ứng dụng không chỉ là nơi quyên góp, mà còn là một hệ sinh thái thiện nguyện nơi:
      </p>
      <ul>
        <li><b>Minh bạch là cốt lõi:</b> Mọi sự đóng góp đều được công khai và cập nhật theo thời gian thực.</li>
        <li><b>Kết nối trực tiếp:</b> Rút ngắn khoảng cách giữa người trao và người nhận.</li>
        <li><b>Cộng đồng bền vững:</b> Nơi những trái tim ấm nóng gặp gỡ và cùng nhau tạo nên thay đổi tích cực.</li>
      </ul>
      <h3 style={{ color: "#ffd600", marginTop: 24 }}>Đội ngũ phát triển</h3>
      <p>
        Sự kết hợp giữa tư duy chiến lược của <b>Dương Quang Long</b>, khả năng thực thi kỹ thuật của <b>Nguyễn Khánh Duy</b> và góc nhìn nhân sinh sâu sắc từ <b>Ô Vĩnh Phúc</b> đã giúp dự án không chỉ là một sản phẩm công nghệ, mà là một hành trình kết nối đầy cảm xúc.
      </p>
      <blockquote style={{ fontStyle: "italic", color: theme.colors.primary, margin: "16px 0" }}>
        "Chúng tôi không chỉ xây dựng một ứng dụng, chúng tôi xây dựng một niềm tin."
      </blockquote>
      <hr style={{ margin: "32px 0" }} />
      <p>
        Dự án Charity DApp giúp kết nối các nhà hảo tâm với các dự án thiện nguyện một cách minh bạch, nhanh chóng và an toàn trên nền tảng blockchain Hedera.
      </p>
      <p>
        Chúng tôi cam kết xây dựng một hệ sinh thái quyên góp phi tập trung, nơi mọi giao dịch đều được ghi nhận công khai và không thể chỉnh sửa.
      </p>
      <p>
        Mọi đóng góp của bạn đều được trân trọng và chuyển trực tiếp đến các dự án ý nghĩa.
      </p>
    </div>
  );
}

export default About;
