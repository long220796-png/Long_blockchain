import React from "react";
import theme from "../theme";

// Mock data
const history = [
  {
    time: "2026-01-31 11:26:00",
    project: "Quỹ Trẻ Em Đường Phố",
    amount: "100",
    tx: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
  },
  {
    time: "2026-01-31 10:15:00",
    project: "Quỹ Học Bổng Vùng Cao",
    amount: "50",
    tx: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd"
  },
  {
    time: "2026-01-30 09:00:00",
    project: "Quỹ Bảo Vệ Động Vật",
    amount: "200",
    tx: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  }
];

function History() {
  return (
    <div style={{ minHeight: "100vh", background: theme.colors.background, paddingTop: 48 }}>
      <div style={{ ...theme.card, maxWidth: 700 }}>
        <h2 style={{ ...theme.heading, textAlign: "center" }}>Lịch sử quyên góp</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
          <thead>
            <tr style={{ background: theme.colors.background }}>
              <th style={{ padding: 12, color: theme.colors.primary, fontWeight: 700, borderBottom: `2px solid ${theme.colors.border}` }}>Time</th>
              <th style={{ padding: 12, color: theme.colors.primary, fontWeight: 700, borderBottom: `2px solid ${theme.colors.border}` }}>Project Name</th>
              <th style={{ padding: 12, color: theme.colors.primary, fontWeight: 700, borderBottom: `2px solid ${theme.colors.border}` }}>Amount (MTK)</th>
              <th style={{ padding: 12, color: theme.colors.primary, fontWeight: 700, borderBottom: `2px solid ${theme.colors.border}` }}>Transaction</th>
            </tr>
          </thead>
          <tbody>
            {history.map((tx, idx) => (
              <tr key={idx} style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                <td style={{ padding: 10, textAlign: "center" }}>{tx.time}</td>
                <td style={{ padding: 10 }}>{tx.project}</td>
                <td style={{ padding: 10, textAlign: "right", color: theme.colors.accent, fontWeight: 600 }}>{tx.amount}</td>
                <td style={{ padding: 10, textAlign: "center" }}>
                  <a
                    href={`https://hashscan.io/testnet/transaction/${tx.tx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.colors.primary, textDecoration: "underline" }}
                  >
                    Xem
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
