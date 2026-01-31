import React from "react";

function ConnectWallet({ walletAddress, connectWallet }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {walletAddress ? (
        <span style={{ color: "green" }}>Đã kết nối: {walletAddress}</span>
      ) : (
        <button onClick={connectWallet} style={{ padding: "8px 18px", background: "#1976d2", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
          Kết nối ví MetaMask
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;
