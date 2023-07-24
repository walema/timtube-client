import SideBar from "./side-bar";
import Contents from "./contents";
import './../style.css'
import Footer from "./footer";

function MainContent() {
    return (
        <>
            <div className="row">
                <div className="col-md-1">
                    <SideBar></SideBar>
                </div>

                <div className="col-md-11">
                    <Contents></Contents>
                </div>


            </div>
            <div className="">
                <Footer/>
            </div>
        </>
    )
}

export default MainContent;