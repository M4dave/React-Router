import "./App.css";
import PathRoutes from "./Routes";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <PathRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
