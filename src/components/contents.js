import './../style.css'
import TopContent from './content-component/top-content';
import MiddleContent from "./content-component/middle-content";
import BottomContent from "./content-component/bottom-content";


function Contents() {
    return (
        <div style={{ width: "100%",backgroundColor:"#090C13" }}>
            <TopContent></TopContent>
            <MiddleContent></MiddleContent>
            <BottomContent></BottomContent>
        </div>
    )
}
export default Contents;