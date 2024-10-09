  import {BrowserRouter} from "react-router-dom";
  import {About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas} from './components'

  const App = () => {
    return (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
            <Hero/>
          </div>
            <About/>
            <Experience/>
            <Tech/>
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
        </div>
    )
  }

  export default App
