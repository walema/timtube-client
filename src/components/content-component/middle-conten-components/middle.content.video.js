import {Card} from "react-bootstrap";
import './../../../style.css'

function MiddleContentVideo() {
    return(
        <Card className="mb-4">
            <div className="row">
                <div className="col-lg-3 "><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eo2Aq.img?w=300&h=156&q=90&m=6&f=jpg&u=t" width="100%"/></div>
                <div className=" text-sm-start my-auto col-lg-5">description</div>
                <div className=" col-lg-2 my-auto middle-video-description">08:40</div>
                <div className=" col-lg-1 my-auto middle-video-description">test</div>
                <div className=" col-lg-1 my-auto middle-video-description">test</div>
            </div>
        </Card>
    )
}
export default MiddleContentVideo;