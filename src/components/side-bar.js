import ListGroup from 'react-bootstrap/ListGroup';
import {BsFillHouseDoorFill, BsFillMouse2Fill, BsFillSendFill} from "react-icons/bs";
import './../style.css'


function SideBar(){
    return(
        <div className="">
            {/*BsFillMouse2Fill*/}

            <div className="sidebar-wrapper">
                <div className="sidebar-element">
                    <a>
                        <BsFillHouseDoorFill className="sidebar-button" color="darkgray" size="2em"/>
                    </a>
                </div>
                <div  className="sidebar-element">
                    <a>
                        <BsFillSendFill className="sidebar-button" color="darkgray" size="2em"/>
                    </a>
                </div>
                <div className="sidebar-element">
                    <a>
                        <BsFillMouse2Fill className="sidebar-button" color="darkgray" size="2em"/>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default SideBar;