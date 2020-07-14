import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/core";
import Navbar from "@/components/navbar";
import { SWRConfig } from "swr";
import fetcher from "lib/fetcher";
import DefaultLayout from "@/components/layouts";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Navbar />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </SWRConfig>
    </ThemeProvider>
  );
};

export default App;
