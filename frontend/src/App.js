import React from "react";
	import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
	import Donate from "./Donate";
	import DonateDetail from "./pages/DonateDetail";
	import About from "./pages/About.jsx";
	import Contact from "./pages/Contact.jsx";
	import Guide from "./pages/Guide.jsx";
	import CompletedProjects from "./pages/CompletedProjects.jsx";
	// Đã xóa History.jsx
	import theme from "./theme";
	import Footer from "./components/Footer";

function NavLinkItem({ to, children }) {
	return (
		<a
			href={to}
			style={{
				fontWeight: 700,
				textDecoration: "none",
				color: "#ffd600",
				fontSize: 22,
				padding: "2px 16px",
				borderRadius: 6,
				border: "2px solid #f5f5dc",
				background: "transparent",
				transition: "background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s",
				boxShadow: "none",
				display: "inline-block",
				margin: "0 2px"
			}}
			onMouseOver={e => {
				e.currentTarget.style.background = "#fffde7";
				e.currentTarget.style.color = "#3f5a83";
				e.currentTarget.style.boxShadow = "0 2px 12px 0 rgba(255, 214, 0, 0.18)";
				e.currentTarget.style.transform = "translateY(-3px) scale(1.07)";
			}}
			onMouseOut={e => {
				e.currentTarget.style.background = "transparent";
				e.currentTarget.style.color = "#ffd600";
				e.currentTarget.style.boxShadow = "none";
				e.currentTarget.style.transform = "none";
			}}
		>
			{children}
		</a>
	);
}

function App() {
	return (
		<Router>
			<div style={{ minHeight: "100vh", width: "100vw", background: theme.colors.background, color: theme.colors.text, paddingBottom: 0 }}>
				<nav style={{
					width: "100vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 32,
					padding: "24px 0 12px 0",
					background: "#111", // black background
					boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.04)",
					marginBottom: 32,
					position: "relative",
					left: "50%",
					transform: "translateX(-50%)"
				}}>
					<NavLinkItem to="/">Trang chủ</NavLinkItem>
					<NavLinkItem to="/about">Về chúng tôi</NavLinkItem>
					<NavLinkItem to="/contact">Liên hệ</NavLinkItem>
					<NavLinkItem to="/guide">Hướng dẫn</NavLinkItem>
					<NavLinkItem to="/completed">Dự án đã hoàn thành</NavLinkItem>
				</nav>
				<Routes>
					<Route path="/" element={<Donate />} />
					<Route path="/donate/:id" element={<DonateDetail />} />
					{/* Đã xóa route lịch sử giao dịch */}
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/projects" element={<CompletedProjects />} />
					<Route path="/completed" element={<CompletedProjects />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

	export default App;
