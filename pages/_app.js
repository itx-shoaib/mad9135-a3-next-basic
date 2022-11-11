import '../styles/globals.css'
import { DataProvider } from '../context/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
