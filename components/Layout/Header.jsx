import Image from "next/image";
const Header = () => {
	return (
		<header className="site_header">
			<div className="nav_wrapper">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-5 d-flex align-items-center">
							<div className="site_logo">
								<a className="site_link" href="#id_ico_home_section">
									<img loading="lazy" src="assets/images/site_logo/site_logo_svg_1.svg" alt="" />
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-2">
							<nav className="main_menu navbar navbar-expand-lg">
								<div className="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
									<ul className="main_menu_list unordered_list text-uppercase">

										<li>
											<a className="nav-link scrollspy_btn" href="#id_ico_about_section">
												<span className="nav_link_label" data-text="About Us">About Us</span>
											</a>
										</li>
										<li>
											<a className="nav-link scrollspy_btn" href="#id_ico_team_section">
												<span className="nav_link_label" data-text="Our Team">Our Team</span>
											</a>
										</li>
										<li>
											<a className="nav-link scrollspy_btn" href="#id_ico_pricing_section">
												<span className="nav_link_label" data-text="Pricing">Pricing</span>
											</a>
										</li>
										<li>
											<a className="nav-link scrollspy_btn" href="blog.html">
												<span className="nav_link_label" data-text="Blog">Blog</span>
											</a>
										</li>
										<li>
											<a className="nav-link scrollspy_btn" href="#id_ico_faq_section">
												<span className="nav_link_label" data-text="Faq">Faq</span>
											</a>
										</li>

										<li>
											<a className="nav-link scrollspy_btn" href="#id_ico_contact_section">
												<span className="nav_link_label" data-text="Contact">Contact</span>
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
						<div className="col-lg-3 col-5">
							<ul className="btns_group unordered_list p-0 justify-content-end">
								<li className="d-lg-none">
									<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
										<i className="far fa-bars"></i>
									</button>
								</li>
								<li>
									<div className="position-relative glowing-button-area max-w-max bottom-5 right-3 md:right-6 flex flex-col justify-center items-center overflow-hidden p-[3px] rounded-lg">
										<div className="block m-auto rounded-full glowing-button-gradient"></div>
										<div className="relative flex items-center justify-center px-6 py-3 rounded-lg glowing-button-inner"><a href="" className="inline-block text-base capitalize glowing-button text-w-800">
											Connect Wallet
										</a>
											<div className="rounded-lg glowing-button-inner-overlay bg-body"></div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header; 