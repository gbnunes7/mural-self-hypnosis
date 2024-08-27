const Header = () => {
	return (
		<div className="flex justify-center items-center gap-32 bg-[#041832] py-[50px] px-[32px] min-h-[100px]">
			<div className="max-w-[350px]">
				 <p className="text-white text-2xl">
					Descubra o poder da autosugestão, potencialize seus pensamentos e ideias transformadoras e guarde em um só lugar!
				</p> 
			</div>
			<img
				src="/public/images/header-image.svg"
				alt="Imagem de Laptop"
				className="max-w-[250px]"
			/>
		</div>
	);
};

export default Header;
