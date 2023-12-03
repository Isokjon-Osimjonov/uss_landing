import "./App.css";
import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
