import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import Navbar from "@/components/navbar";
import { SWRConfig } from "swr";
import fetcher from "lib/fetcher";

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
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
};

export default App;
