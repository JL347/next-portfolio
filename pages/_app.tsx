import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../components/About";
import { ThemeProvider } from 'next-themes'

function MyApp() {
  return (
          <>
          <ThemeProvider attribute="class" enableSystem={false}>
            <Navigation/>
            <About/>
            <Footer />
          </ThemeProvider>
          </>
        )
}

export default MyApp