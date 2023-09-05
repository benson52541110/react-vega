const Icon = ({ name, className = "" }) => {
	return (
		<i
			className={`${className} mdi mdi-${name} rounded-full aspect-square flex items-center justify-center`}
		></i>
	);
};

export default Icon;
