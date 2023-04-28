import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { wrapper } from "../redux/store";
import { Nunito } from "next/font/google";
import "../styles/globals.scss";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, ...rest }) {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<main className={nunito.className}>
				<Layout>
					<Component {...props.pageProps} />
				</Layout>
			</main>
		</Provider>
	);
}
