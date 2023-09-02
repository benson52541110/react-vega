const ProductItem = (props) => {
	return (
		<div className={`flex flex-col ${props.className} px-7 py-5`}>
			<div className="w-24 p-2 text-white rounded-lg bg-primary">
				{props.children}
			</div>
		</div>
	);
};

export default ProductItem;
