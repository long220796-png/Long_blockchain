const { Client, PrivateKey, AccountId, TransferTransaction, Hbar } = require("@hashgraph/sdk");

// Thay bằng thông tin tài khoản gửi của bạn
const senderId = AccountId.fromString("0.0.7775111");
const senderKey = PrivateKey.fromString("0x3061656366fcc82f259dd7441aa0987b022e81aac..."); // Dán HEX Encoded Private Key đầy đủ ở đây

// Tài khoản nhận (ví dụ: 0.0.4426239)
const receiverId = AccountId.fromString("0.0.4426239");

async function main() {
    const client = Client.forTestnet().setOperator(senderId, senderKey);

    const tx = await new TransferTransaction()
        .addHbarTransfer(senderId, new Hbar(-1)) // Gửi 1 HBAR, đổi số nếu muốn
        .addHbarTransfer(receiverId, new Hbar(1))
        .execute(client);

    const receipt = await tx.getReceipt(client);
    console.log("Giao dịch thành công, status:", receipt.status.toString());
}

main();
