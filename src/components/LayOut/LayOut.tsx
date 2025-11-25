import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function LayOut() {
  return (
    <div className="app-container">
      <header>
        <NavBar />
      </header>
      <main  className="main-content">
        <Outlet />
      </main>
      <footer className="footerContainer">
        <Footer />
      </footer>
    </div>
  );
}