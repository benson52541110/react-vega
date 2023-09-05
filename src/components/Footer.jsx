import Button from "../UI/Button";
import Icon from "../UI/Icon";

const Footer = () => {
	return (
		<footer className=" h-[1095px] w-full flex flex-col items-center ">
			<div
				className=" px-[70px] w-[1400px] h-[323px] bg-cover bg-center bg-no-repeat mt-[141px] mb-[117px] flex items-center justify-between"
				style={{
					backgroundImage: `url("/assets/images/Subscribe.jpg")`,
				}}
			>
				<p className="text-5xl font-extrabold text-white max-w-[357px]">
					Subscribe to our Newsletter
				</p>
				<div className="flex h-[80px]  gap-2">
					<input
						placeholder="Your Email Address"
						className="w-[349px] h-full rounded-2xl pl-6"
					></input>
					<Button className="text-xl font-medium text-white bg-primary">
						Subscribe
					</Button>
				</div>
			</div>
			<div className=" w-[1400px] h-[500px] flex justify-center">
				<div className="flex justify-between gap-12">
					<div className="flex-1 ">
						<p className="mb-8 text-3xl font-bold text-right text-primary">
							Contact Us
						</p>
						<div className="flex flex-col gap-8 ">
							<div className="text-right ">
								<p className="text-lg font-bold text-primary">Email</p>
								<p className="text-lg font-light">needhelp@Organia.com</p>
							</div>
							<div className="text-right ">
								<p className="text-lg font-bold text-primary">Phone</p>
								<p className="text-lg font-light">666 888 888</p>
							</div>
							<div className="text-right ">
								<p className="text-lg font-bold text-primary">Address</p>
								<p className="text-lg font-light">
									88 road, borklyn street, USA
								</p>
							</div>
						</div>
					</div>
					<div className="w-[626px] border-x-2 flex flex-col item-center text-center px-10">
						<div className="flex items-center justify-center">
							<img src={"/assets/images/Logo.svg"} alt="logo" />
							<h3 className="ml-2 text-4xl font-bold text-primary">Organick</h3>
						</div>
						<p className="mt-6 mb-12 ">
							Organick's eco-friendly products have truly changed the way I
							approach sustainable living. Simply amazing!
						</p>
						<div className="flex justify-center gap-4 ">
							<Icon
								name="instagram"
								className="flex items-center justify-center p-5 rounded-full bg-secondary-extraLight w-[3vw] h-[3vw] "
							></Icon>
							<Icon
								name="facebook"
								className="flex items-center justify-center p-5 rounded-full bg-secondary-extraLight w-[3vw] h-[3vw]"
							></Icon>
							<Icon
								name="twitter"
								className="flex items-center justify-center p-5 rounded-full bg-secondary-extraLight w-[3vw] h-[3vw]"
							></Icon>
							<Icon
								name="github "
								className="flex items-center justify-center p-5 rounded-full bg-secondary-extraLight w-[3vw] h-[3vw]"
							></Icon>
						</div>
					</div>
					<div className="flex-1">
						<p className="mb-8 text-3xl font-bold text-left text-primary">
							Utility Pages
						</p>
						<div className="flex flex-col gap-8 ">
							<div className="text-left ">
								<p className="text-lg font-light">Style Guide</p>
							</div>
							<div className="text-left ">
								<p className="text-lg font-light">404 Not Found</p>
							</div>
							<div className="text-left ">
								<p className="text-lg font-light">Password Protected</p>
							</div>
							<div className="text-left ">
								<p className="text-lg font-light">Licenses</p>
							</div>
							<div className="text-left ">
								<p className="text-lg font-light">Changelog</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full text-center mt-[180px]">
				<p className="py-5 border-t-2">
					Copyright © Organick | Designed by VictorFlow Templates - Powered by
					Webflow
				</p>
			</div>
		</footer>
	);
};

export default Footer;
