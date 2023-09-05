import { Link } from "react-router-dom";
import Icon from "../UI/Icon";
const menuItems = [
	{ key: "1", label: "Home" },
	{ key: "2", label: "About" },
	{ key: "3", label: "Pages" },
	{ key: "4", label: "Shop" },
	{ key: "5", label: "Product" },
	{ key: "6", label: "News" },
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
				{menuItems.map((item, index) => (
					<li className="cursor-pointer " key={item.key}>
						<Link to={item.key === "1" ? "/" : `/${item.label.toLowerCase()}`}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			<div className="relative mr-5">
				<input
					className="border border-solid border-1 rounded-[66px] bg-gray-50 px-2 h-8 w-[376px]"
					placeholder="輸入搜索內容"
				/>
				<Icon
					className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-secondary text-[5px] text-white  w-[1.4vw] h-[1.4vw] "
					name="magnify"
				></Icon>
			</div>
			<div className="flex items-center border border-1 rounded-[66px] h-8 px-2">
				<Icon
					name="cart"
					className=" bg-primary  w-[1.4vw] h-[1.4vw] text-[5px] text-white"
				></Icon>

				<span className="ml-2">cart(0)</span>
			</div>
		</div>
	);
};

export default Navbar;
