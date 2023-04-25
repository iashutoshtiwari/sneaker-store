import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { wrapper } from "../redux/store";
import "../styles/globals.scss";

export default function App({ Component, ...rest }) {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<Layout>
				<Component {...props.pageProps} />
			</Layout>
		</Provider>
	);
}
