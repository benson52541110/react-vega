import ProductItem from "./ProductItem";

const Product = (props) => {
	return (
		<div className={`flex w-full px-[260px] ${props.className}`}>
			<ProductItem className="w-[25%] bg-gray-light h-[483px] text-center rounded-3xl">
				Vegetable
			</ProductItem>
		</div>
	);
};
export default Product;
