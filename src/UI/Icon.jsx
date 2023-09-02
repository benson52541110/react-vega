import { useState, useEffect } from "react";

const Icon = ({ name, theme, className = "" }) => {
	const [themeColor, setThemeColor] = useState("bg-primary");

	useEffect(() => {
		if (theme === "primary") {
			setThemeColor("bg-primary");
		} else if (theme === "secondary") {
			setThemeColor("bg-secondary");
		}
	}, [theme]);

	return (
		<i
			className={`${className} text-white ${themeColor} rounded-full material-icons p-1.5 text-[5px]`}
		>
			{name}
		</i>
	);
};

export default Icon;
