import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Career } from "./components/Career";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Connect } from "./components/Connect";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App" class="container-fluid">
      <NavBar />
      <Banner />
      <Skills />
      <Career />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
