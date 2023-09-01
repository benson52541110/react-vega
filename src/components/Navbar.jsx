import React from "react";

const menuItems = [
	{ key: "1", label: "首頁" },
	{ key: "2", label: "關於" },
	{ key: "3", label: "頁面" },
	{ key: "4", label: "商店" },
	{ key: "5", label: "產品" },
	{ key: "6", label: "新知" },
];

const Navbar = () => {
	return (
		<div>
			<div>
				<div>
					<img src="" alt="logo" />
					<h3>Organick</h3>
				</div>
			</div>
			<div>
				<ul>
					{menuItems.map((item) => (
						<li key={item.key}>{item.label}</li>
					))}
				</ul>
			</div>
			<div>
				<input placeholder="輸入搜索內容" />
			</div>
			<div>
				<div>
					<span>cart(0)</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
