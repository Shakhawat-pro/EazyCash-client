import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import TopNav from "../Pages/Shared/NavBar/TopNav";

const Main = () => {
    return (
        <div className="">
            <TopNav></TopNav>
            <Outlet></Outlet>
            <NavBar></NavBar>
            
        </div>
    );
};

export default Main;