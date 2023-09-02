import Icon from "../UI/Icon";
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
		<div className="flex items-center px-40 my-20">
			<div>
				<div className="flex items-center">
					<img src={"/assets/images/Logo.svg"} alt="logo" />
					<h3 className="ml-2 text-4xl font-bold text-primary">Organick</h3>
				</div>
			</div>
			<ul className="flex items-center gap-10 mx-36">
				{menuItems.map((item) => (
					<li className="cursor-pointer " key={item.key}>
						{item.label}
					</li>
				))}
			</ul>
			<div className="relative mr-5">
				<input
					className="border border-solid border-1 rounded-[66px] bg-gray-50 px-2 h-8 w-[376px]"
					placeholder="輸入搜索內容"
				/>
				<Icon
					className="absolute right-0 transform -translate-y-1/2 top-1/2"
					name="search"
					theme="secondary"
				></Icon>
			</div>
			<div className="flex items-center border border-1 rounded-[66px] h-8 px-2">
				<Icon name="shopping_cart" theme="primary"></Icon>

				<span className="ml-2">cart(0)</span>
			</div>
		</div>
	);
};

export default Navbar;
