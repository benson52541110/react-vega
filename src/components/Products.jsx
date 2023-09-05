import ProductItem from "./ProductItem";

const Product = (props) => {
	return (
		<div className={`flex w-full ${props.className} flex-wrap gap-5`}>
			<ProductItem className="w-[calc(25%-20px)] bg-gray-light h-[483px] text-center rounded-3xl">
				Vegetable
			</ProductItem>
			<ProductItem className="w-[calc(25%-20px)] bg-gray-light h-[483px] text-center rounded-3xl">
				Vegetable
			</ProductItem>
			<ProductItem className="w-[calc(25%-20px)] bg-gray-light h-[483px] text-center rounded-3xl">
				Vegetable
			</ProductItem>
			<ProductItem className="w-[calc(25%-20px)] bg-gray-light h-[483px] text-center rounded-3xl">
				Vegetable
			</ProductItem>
		</div>
	);
};
export default Product;
