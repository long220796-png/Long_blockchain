import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import theme from "../theme";
import projects from "../data/projects";

function DonateDetail() {
  const [showHistory, setShowHistory] = useState(false);
  const [hoveredImg, setHoveredImg] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === String(id));
  // Số tiền đã quyên góp (giả lập, random cho demo)
  let raised = 0;
  let percent = 0;
  if (project) {
    raised = Math.floor(project.targetAmount * (0.35 + 0.5 * Math.random()));
    percent = Math.min(100, Math.round((raised / project.targetAmount) * 100));
  }

  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
    // Đã bỏ các state họ tên, dự án

  // Kết nối MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Vui lòng cài MetaMask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet(accounts[0]);
  };

  // Gửi donate
  const handleDonate = async () => {
  if (!wallet) {
    alert("Vui lòng kết nối MetaMask");
    return;
  }

  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    alert("Số tiền không hợp lệ");
    return;
  }

    // Đã bỏ validate họ tên, dự án, memo

  setLoading(true);

  try {
    // ĐỊA CHỈ TOKEN MTK (ERC20)
    const TOKEN_ADDRESS = "0x0c03Ba43E611a6A83A51FF0eB878D8b68c1240C2";

    // VÍ DỰ ÁN (NHẬN TIỀN)
    const PROJECT_WALLET = "0x9d5f77169ead4C8C96D63993eD9ef6239092c416";

    const ERC20_ABI = [
      "function transfer(address to, uint256 amount) public returns (bool)",
      "function decimals() view returns (uint8)"
    ];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const token = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, signer);

    const decimals = await token.decimals();
    const value = ethers.parseUnits(amount.toString(), decimals);

    // CHUYỂN TOKEN
    const tx = await token.transfer(PROJECT_WALLET, value);
    await tx.wait();

      // Đã bỏ phần gửi thông tin lên backend để tránh lỗi phụ

    alert("Quyên góp thành công!");
    setAmount("");
    setShowHistory(true);

  } catch (err) {
    console.error(err);
    alert("Chuyển token thất bại");
  } finally {
    setLoading(false);
  }
};


  return (
    <div style={{ maxWidth: 500, margin: "40px auto", background: "#c9c5bb", borderRadius: 14, boxShadow: "0 2px 12px 0 rgba(25, 118, 210, 0.06)", padding: 28, color: "#222" }}>
      <h2 style={{ color: "#ffd600", marginBottom: 18 }}>Quyên góp cho dự án</h2>
      {project ? (
        <>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: 90,
                height: 68,
                objectFit: "cover",
                borderRadius: 8,
                marginRight: 18,
                boxShadow: hoveredImg ? "0 4px 16px 0 rgba(25, 118, 210, 0.18)" : "0 1px 4px 0 rgba(25, 118, 210, 0.10)",
                transform: hoveredImg ? "scale(1.06)" : "scale(1)",
                transition: "box-shadow 0.2s, transform 0.18s"
              }}
              onMouseEnter={() => setHoveredImg(true)}
              onMouseLeave={() => setHoveredImg(false)}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>{project.name}</div>
              <div style={{ color: "#ffd600", fontSize: 15, marginTop: 2 }}>{project.description}</div>
              <div style={{ color: "#ffd600", fontSize: 14, marginTop: 4 }}><b>Mục tiêu:</b> {project.targetAmount} MTK</div>
            </div>
          </div>
          {/* Thanh tiến độ mềm mại */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, marginBottom: 4 }}>
              <span style={{ color: "#fff" }}><b>Đã quyên góp:</b> {raised} MTK</span>
              <span style={{ color: "#fff", fontWeight: 600 }}>{percent}%</span>
            </div>
            <div style={{ width: "100%", height: 18, background: "#e57373", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 4px 0 rgba(25, 118, 210, 0.06)", position: "relative" }}>
              <div style={{
                width: percent + "%",
                height: "100%",
                background: "#d32f2f",
                borderRadius: 10,
                transition: "width 0.7s cubic-bezier(.4,2,.6,1)",
                boxShadow: "0 1px 6px 0 rgba(211,47,47,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: 1
              }}>
                {percent > 10 ? `${percent}%` : ""}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{ color: theme.colors.error, marginBottom: 18 }}>Không tìm thấy dự án!</div>
      )}

      {!wallet ? (
        <button
          onClick={connectWallet}
          style={{
            ...theme.button,
            minWidth: 160,
            marginBottom: 12,
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseOver={e => e.currentTarget.style.background = theme.colors.accent}
          onMouseOut={e => e.currentTarget.style.background = theme.button.background}
        >
          Kết nối MetaMask
        </button>
      ) : (
        <p>
          <b>Ví:</b> {wallet}
        </p>
      )}



      <div style={{ marginTop: 16 }}>
        <input
          placeholder="Số tiền MTK"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ ...theme.input, maxWidth: 220 }}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={handleDonate}
          disabled={loading}
          style={{
            minWidth: 140,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
            marginRight: 8,
            background: hoveredBtn ? "#b71c1c" : "#d32f2f",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 600,
            fontSize: 16,
            boxShadow: hoveredBtn ? "0 4px 16px 0 rgba(211,47,47,0.18)" : "0 1px 4px 0 rgba(211,47,47,0.10)",
            transform: hoveredBtn ? "scale(1.07)" : "scale(1)",
            transition: "background 0.2s, box-shadow 0.2s, transform 0.18s"
          }}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
        >
          {loading ? "Đang xử lý..." : "Quyên góp"}
        </button>
      </div>
      {showHistory && (
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <span style={{ color: "#fff", fontSize: 16, marginRight: 12 }}>
            Xem lịch sử tại:
          </span>
          <a
            href="https://hashscan.io/testnet/transactions"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#d32f2f",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: 16,
              boxShadow: "0 1px 4px 0 rgba(211,47,47,0.10)",
              transition: "background 0.2s, transform 0.15s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#b71c1c"}
            onMouseOut={e => e.currentTarget.style.background = "#d32f2f"}
          >
            Xem ngay
          </a>
        </div>
      )}
    </div>
  );
}

export default DonateDetail;
