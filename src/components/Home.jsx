const Home = () => {
	return (
		<div className="flex-col items-center justify-center">
			<div
				className=" h-[898px] bg-cover bg-center flex items-center justify-center relative"
				style={{ backgroundImage: `url("/assets/images/Background.png")` }}
			>
				<div className="absolute flex-col">
					<p>100% National Food</p>
					<p>Choose the best healthier way of life</p>
					<button type="button" onClick={() => alert("Button Clicked!")}>
						Explore Now
					</button>
				</div>
			</div>
			<div>
				<div>
					<div>
						<p>Natural!!</p>
						<p>Get Garden Fresh Fruits</p>
					</div>
				</div>
				<div>
					<div>
						<p>Offer!!</p>
						<p>Get 10% off on vegetables</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
