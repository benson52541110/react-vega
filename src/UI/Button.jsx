import Icon from "./Icon";
const Button = (props) => {
	return (
		<button
			className={` flex items-center justify-center text-xl px-10 py-7  rounded-2xl ${props.className}`}
		>
			{props.children}
			<Icon
				name="arrow-right"
				className="flex items-center justify-center p-2 rounded-full bg-primary w-[1.3vw] h-[1.3vw] ml-2 text-white text-base"
			></Icon>
		</button>
	);
};

export default Button;
