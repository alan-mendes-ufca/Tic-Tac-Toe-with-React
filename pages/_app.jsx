/*
  Wrapper: componente (container) raiz, que envolve todos os ouutros componentes da aplicação
*/
import "./styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
