// import "@/styles/globals.css";
import "../styles/globals.css";

// import "@/styles/globals.css.css";

import Navbar from "../components/Navbar";
function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
