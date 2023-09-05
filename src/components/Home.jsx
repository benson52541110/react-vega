import Button from "../UI/Button";
import Product from "./Products";
import Footer from "./Footer";

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
			<div className=" h-[1750px] w-full flex flex-col py-[180px] px-[260px] items-center">
				<p className="text-4xl text-secondary font-yellowtail">Categories</p>
				<p className="mt-2 text-5xl font-extrabold text-primary">
					Our Products
				</p>
				<Product className="mt-10"></Product>
				<Button className="mt-32 font-bold text-white bg-primary">
					Load More
				</Button>
			</div>
			<div
				className="h-[1267px] py-40 px-[406px] flex flex-col items-center"
				style={{
					backgroundImage: `url("/assets/images/Testimonial.jpg")`,
				}}
			>
				<p className="text-4xl text-secondary font-yellowtail">Testimonial</p>
				<p className="mt-2 text-5xl font-extrabold text-primary">
					What Out Customer Saying
				</p>
				<img
					src="/assets/images/Customer.jpg"
					alt="customer"
					className="w-[125px] h-[125px] rounded-full mt-10"
				/>
				<p className=" max-w-[780px] mt-16 text-center">
					The service was exceptional, and the product quality exceeded all my
					expectations. Highly recommend! User-friendly interface and fast
					shipping made my experience fantastic. Will definitely shop here
					again.
				</p>
				<p>Sara Taylor</p>
				<hr className="w-full my-24 border-t border-gray-200" />
				<div className="flex justify-between w-full gap-16 px-10">
					<div className="flex flex-col items-center justify-center p-16 border rounded-full border-secondary aspect-square bg-gray-regular">
						<p className="text-4xl font-extrabold text-primary">100%</p>
						<p className="text-lg font-normal text-primary whitespace-nowrap">
							Organic
						</p>
					</div>
					<div className="flex flex-col items-center justify-center p-16 border rounded-full border-secondary aspect-square bg-gray-regular">
						<p className="text-4xl font-extrabold text-primary">285</p>
						<p className="text-lg font-normal text-primary whitespace-nowrap">
							Active Product
						</p>
					</div>
					<div className="flex flex-col items-center justify-center p-16 border rounded-full border-secondary aspect-square bg-gray-regular">
						<p className="text-4xl font-extrabold text-primary">350+</p>
						<p className="text-lg font-normal text-primary whitespace-nowrap">
							Organic Orchads
						</p>
					</div>
					<div className="flex flex-col items-center justify-center p-16 border rounded-full border-secondary aspect-square bg-gray-regular">
						<p className="text-4xl font-extrabold text-primary">25+</p>
						<p className="text-lg font-normal text-primary whitespace-nowrap">
							Years of Farming
						</p>
					</div>
				</div>
			</div>
			<div className="h-[1050px] py-52 px-64 bg-primary w-full flex items-center">
				<div className="flex flex-col w-full">
					<div className="flex justify-between w-full">
						<div>
							<p className="text-4xl text-secondary font-yellowtail">Offer</p>
							<p className="mt-2 text-5xl font-extrabold text-white">
								We Offer Organic Fro You
							</p>
						</div>
						<div>
							<Button className=" bg-regular">View All Product</Button>
						</div>
					</div>
					<Product className="mt-10"></Product>
				</div>
			</div>
			<div className="h-[931px] w-full flex items-center ">
				<div
					className="flex-1 w-full h-[931px] bg-cover bg-center"
					style={{ backgroundImage: `url("/assets/images/Econ friendly.jpg")` }}
				></div>
				<div className="flex-1 w-[635px] ">
					<div className="flex flex-col transform translate-x-[-90px] bg-white py-[78px] px-[90px] rounded-[30px]">
						<p className="text-4xl text-secondary font-yellowtail">
							Eco Friendly
						</p>
						<p className="text-5xl font-extrabold text-primary">
							Econis is Friendly Organic Store
						</p>
						<div className="flex flex-col gap-9 ">
							<div className="flex flex-col">
								<p className="text-2xl font-medium text-primary">
									Start with Our Company First
								</p>
								<p className="font-light">
									Our Company First transformed our operations and took our
									efficiency to the next level. Highly recommend!
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-2xl font-medium text-primary">
									Learn How to Grow yourself
								</p>
								<p className="font-light">
									The 'Learn How to Grow Yourself' course gave me the tools to
									become more confident and effective in both my personal and
									professional life.
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-2xl font-medium text-primary">
									Farming Strategies og Today
								</p>
								<p className="font-light">
									The modern techniques I learned from Farming Strategies of
									Today have significantly increased our yield and
									sustainability.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[931px] w-full flex  bg-secondary-light items-center">
				<div className="w-full h-[583px] flex  gap-10 justify-between ">
					<div
						className="flex items-center justify-center w-full "
						style={{
							backgroundImage: `url("/assets/images/Organic Juice.jpg")`,
						}}
					>
						<div className="rounded-[20px] bg-white px-20 py-8 text-center ">
							Organic Juice
						</div>
					</div>
					<div
						className="flex items-center justify-center w-full "
						style={{
							backgroundImage: `url("/assets/images/Organic Food.jpg")`,
						}}
					>
						<div className="rounded-[20px] bg-white px-20 py-8 text-center ">
							Organic Food
						</div>
					</div>
					<div
						className="flex items-center justify-center w-full "
						style={{
							backgroundImage: `url("/assets/images/Nuts Cookies.jpg")`,
						}}
					>
						<div className="px-20 rounded-[20px] bg-white py-8 text-center  ">
							Nuts Cookies
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
export default Home;
