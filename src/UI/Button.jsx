import Icon from "./Icon";
const Button = (props) => {
	return (
		<button className={` text-xl px-10 py-7  rounded-2xl ${props.className}`}>
			{props.children}
			<Icon name="arrow_forward" theme="primary" className="ml-2"></Icon>
		</button>
	);
};

export default Button;
