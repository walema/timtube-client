import SideBar from "./side-bar";
import Contents from "./contents";

function MainContent(){
    return(
        <div className="row">
            <div className="col-md-1">
                <SideBar></SideBar>
            </div>

            <div className="col-md-11">
                <Contents></Contents>
            </div>

        </div>
    )
}
export default MainContent;