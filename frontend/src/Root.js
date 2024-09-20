import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header/Header"
import Footer from "./components/layouts/Footer/Footer";

export default function Root(){
return(
    <>
 <Header />
    <Outlet/>
    <Footer />
    </>
)
}