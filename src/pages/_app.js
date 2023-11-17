import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { wrapper } from "../redux/store";
import "@fontsource/bebas-neue";
import "@fontsource/roboto";
import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import theme from "@/utils/theme";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <main>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </Provider>
  );
}
