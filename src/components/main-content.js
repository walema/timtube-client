import SideBar from "./side-bar";
import Contents from "./contents";
import './../style.css'
import Footer from "./footer";

function MainContent() {
    return (
// /* margin-right: calc(-0.5 * var(--bs-gutter-x)); */
// /* margin-left: calc(-0.5 * var(--bs-gutter-x));
    <>
        <div className="row" style={{marginRight:"0px",marginLeft:"0px"}}>
            <div className="col-md-1 sidebar">
                <SideBar></SideBar>
            </div>

            <div className="col-md-11" style={{backgroundColor:"#090C13"}}>
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