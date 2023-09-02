import Button from "../UI/Button";
import Product from "./Products";

const Home = () => {
	return (
		<div className="flex-col items-center justify-center">
			<div
				className=" h-[898px] bg-cover bg-center flex items-center relative"
				style={{ backgroundImage: `url("/assets/images/Background.png")` }}
			>
				<div className="absolute flex-col max-w-[530px] left-[10%]">
					<p className="text-4xl font-yellowtail text-secondary">
						100% National Food
					</p>
					<p className="font-extrabold text-primary text-7xl">
						Choose the best healthier way of life
					</p>
					<Button className="mt-6 font-medium text-primary bg-regular">
						Explore Now
					</Button>
				</div>
			</div>
			<div className="h-[717px] py-[170px] ">
				<div className="h-[367px] flex gap-9 items-center justify-center rel">
					<div
						className="w-[682px] h-[100%] relative flex items-center"
						style={{ backgroundImage: `url("/assets/images/FreshFruit.png")` }}
					>
						<div className="absolute left-[10%]  text-white">
							<p className="text-4xl font-yellowtail">Natural!!</p>
							<p className=" text-[40px] max-w-[277px] font-extrabold">
								Get Garden Fresh Fruits
							</p>
						</div>
					</div>
					<div
						className="w-[682px] h-[100%] relative flex items-center"
						style={{ backgroundImage: `url("/assets/images/Vegetable.png")` }}
					>
						<div className="absolute left-[10%]">
							<p className="text-4xl font-yellowtail text-secondary">Offer!!</p>
							<p className=" text-[40px] max-w-[277px] font-extrabold text-primary">
								Get 10% off on vegetables
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[1067px] py-24 bg-gray-light flex items-center">
				<div
					className="w-[867px] h-[911px]"
					style={{ backgroundImage: `url("/assets/images/About.png")` }}
				></div>
				<div className="flex-col w-[702px] h-[682px]">
					<p className="text-4xl text-secondary font-yellowtail">About us</p>
					<p className="my-2 text-5xl font-extrabold text-primary">
						We Believe in Working Accredited Farmers
					</p>
					<p>
						"We firmly believe in collaborating with accredited farmers to
						ensure top-quality produce. This partnership allows us to offer
						goods that are both ethically sourced and sustainably farmed. Our
						commitment to excellence starts at the very root, promising
						consumers the best in every bite.
					</p>
					<div className="flex mt-11">
						<div
							className="w-[101px] h-[101px]"
							style={{ backgroundImage: `url("/assets/images/foodIcon.png")` }}
						></div>
						<div className="flex flex-col justify-around flex-1 ml-5">
							<p className="text-2xl font-extrabold text-primary">
								Organic Foods Only
							</p>
							<p className=" text-regular">
								We are dedicated to offering only organic foods, setting the
								standard for quality and sustainability.
							</p>
						</div>
					</div>
					<div className="flex mt-8 mb-11">
						<div
							className="w-[101px] h-[101px]"
							style={{
								backgroundImage: `url("/assets/images/qualityIcon.png")`,
							}}
						></div>
						<div className="flex flex-col justify-around flex-1 ml-5 ">
							<p className="text-2xl font-extrabold text-primary">
								Quality Standards
							</p>
							<p className=" text-regular">
								Our unwavering commitment to quality standards ensures that
								every product you receive is exceptional and reliable.
							</p>
						</div>
					</div>
					<Button className="text-white bg-primary">Shop Now</Button>
				</div>
			</div>
			<div className=" h-[1750px] w-full flex flex-col py-[180px] items-center">
				<p className="text-4xl text-secondary font-yellowtail">Categories</p>
				<p className="mt-2 text-5xl font-extrabold text-primary">
					Our Products
				</p>
				<Product className="mt-10"></Product>
			</div>
		</div>
	);
};
export default Home;
