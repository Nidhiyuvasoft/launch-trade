"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../Redux/Store";
import Layout from "../components/Layout/Layout";
// import Layout from "../components/Layout/Layout";

const Wrapper = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppRender>{children}</AppRender>
			</PersistGate>
		</Provider>
	);
};

const AppRender = ({ children }) => {
	return <Layout>
			{children}
	</Layout>;
};

export default Wrapper;
