import React from 'react';

const Footer = () => {
    return (
        <footer className="ico_site_footer section_decoration section_shadow_top" id="id_ico_contact_section">
            <div className="decoration_item shape_top">
                <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="register_form">
                            <h1 className="heading_text text-center">Have Questions? Contact with us Anytime</h1>
                            <div className="form-group">
                                <label className="input_title" htmlFor="input_email">Email</label>
                                <input id="input_email" className="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required="" />
                            </div>
                            <div className="form-group">
                                <label className="input_title" htmlFor="input_pass">Phone Number</label>
                                <input className="form-control" type="text" name="password" placeholder="Enter Phone Number" required="" />
                            </div>
                            <div className="form-group">
                                <textarea id="" className="form-control mb-0" placeholder="Enter a short token description (max 200 chars)"></textarea>
                            </div>
                            <button className="btn" type="submit">
                                <span className="btn_label">Submit</span>
                                <span className="btn_icon"><i className="fa-regular fa-arrow-up-right"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="middle_area">
                    <div className="column">
                        <h3 className="footer_title text-uppercase">Join our social group</h3>
                        <ul className="social_block style_2 unordered_list justify-content-center">
                            <li>
                                <a href="#!">
                                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom text-center">
                    <p className="copyright_text m-0 text-secondary">Copyright© 2025 Launchtrade.ai All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;