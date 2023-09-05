const ProductItem = (props) => {
	return (
		<div className={`flex flex-col ${props.className} px-7 py-5`}>
			<div className="w-24 p-2 mb-3 text-white rounded-lg bg-primary">
				{props.children}
			</div>
			<div
				className="w-full h-[328px] bg-center"
				style={{ backgroundImage: `url("/assets/images/Broccoli.png")` }}
			></div>
			<p className="mt-3 text-xl font-bold text-left text-primary">
				Calabrese Broccoli
			</p>

			<hr className="mt-4 mb-4 border-t border-gray-200" />

			<div className="flex items-center">
				<p className="text-sm font-bold text-left line-through text-gray">
					$20.00
				</p>
				<p className="ml-2 text-xl font-bold text-left text-primary">$13.00</p>
			</div>
		</div>
	);
};

export default ProductItem;
