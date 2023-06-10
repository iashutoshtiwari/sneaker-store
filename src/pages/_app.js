import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { wrapper } from "../redux/store";
import { Nunito, Bebas_Neue } from "next/font/google";
import "../styles/globals.scss";

export const nunito = Nunito({ subsets: ["latin"] });
export const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

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
