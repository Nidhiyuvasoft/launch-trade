
import "./globals.css";
import Wrapper from "../Services/Wrapper";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PageLoading from "../components/Loading/PageLoading";
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/fontawesome.css"
import "../public/assets/css/cursor.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/aos.css"
import "../public/assets/css/swiper-bundle.min.css"
import "../public/assets/css/magnific-popup.min.css"
import "../public/assets/css/odometer.min.css"
import "../public/assets/css/style.css"
import '../public/assets/images/site_logo/favicon_1.svg'





export const metadata = {
	title: "Personalized AI",
	description: "Experience the power of Personalized AI",
};

export default function RootLayout({
	children,
}) {
	return (
		<html lang="en" >
			<head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				{/* <link rel="shortcut icon" href="assets/images/site_logo/favicon_1.svg" /> */}

			</head>
			<body className="index_ico" suppressHydrationWarning={true}>
				<PageLoading/>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Wrapper>{children}</Wrapper>
				
				{/* <!-- Fraimwork - Jquery Include --> */}
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/popper.min.js"></script>
				<script src="assets/js/bootstrap.min.js"></script>
				<script src="assets/js/bootstrap-dropdown-ml-hack.min.js"></script>

				{/* Animation - jquery include */}
				<script src="assets/js/cursor.js"></script>
				<script src="assets/js/gsap.js"></script>
				<script src="assets/js/gsap-scroll-trigger.js"></script>
				<script src="assets/js/gsap-split-text.js"></script>
				<script src="assets/js/smooth-scroll.js"></script>
				<script src="assets/js/aos.js"></script>

				{/* <!-- Carousel - Jquery Include --> */}
				<script src="assets/js/swiper-bundle.min.js"></script>
				{/* Video & Image Popup - Jquery Include */}
				<script src="assets/js/magnific-popup.min.js"></script>
				
				{/* Counter - Jquery Include */}
				<script src="assets/js/appear.min.js"></script>
				<script src="assets/js/odometer.min.js"></script>
				{/* Custom - Jquery Include */}
				<script src="assets/js/main.js"></script>
			</body>
		</html>
	);
}


