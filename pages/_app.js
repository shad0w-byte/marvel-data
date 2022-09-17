import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from "../styles/global"

function MyApp({ Component, pageProps }) {
  return(
      <>
        <Component {...pageProps} />
        <GlobalStyle/>
      </>
  )
}

export default MyApp
