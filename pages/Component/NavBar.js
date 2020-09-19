function NavBar() {
	return (
		<nav id="header" class="w-full z-30 top-0 py-1">
			<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-20 py-6">
				<div class="order-1 md:order-2">
					<a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl quicks" href="/">
            ELEGANT
          </a>
				</div>
				<div class="order-2 md:order-3 flex items-center" id="nav-content">
					<label for="menu-toggle" class="cursor-pointer md:hidden block">
						<svg class="fill-current text-gray-900" width="20" height="20" viewBox="0 0 20 20">
							<title>menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</label>
					<input class="hidden" type="checkbox" id="menu-toggle" />
					<div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
						<nav>
							<ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 text-xl quicks">
								<li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">About</a></li>
								<li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Services</a></li>
								<li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Portfolio</a></li>
								<li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Testimony</a></li>
								<li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
