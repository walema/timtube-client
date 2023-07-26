import './../style.css'
import TopContent from './content-component/top-content';
import MiddleContent from "./content-component/middle-content";


function Contents() {
    return (
        <div style={{ width: "100%",backgroundColor:"darkcyan" }}>
            <TopContent></TopContent>
            <MiddleContent></MiddleContent>
        </div>
    )
}
export default Contents;