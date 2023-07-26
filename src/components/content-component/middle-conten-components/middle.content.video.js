import {Card} from "react-bootstrap";
import './../../../style.css'

function MiddleContentVideo() {
    return(
        <Card className="mb-4">
            <div className="row">
                <div className="col-lg-3 "><img src="https://storage.u-food.org/uploads/events/%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D0%B8/Picture_online-2015.jpg" width="100%"/></div>
                <div className=" text-sm-start my-auto col-lg-5">description</div>
                <div className=" col-lg-2 my-auto middle-video-description">08:40</div>
                <div className=" col-lg-1 my-auto middle-video-description">test</div>
                <div className=" col-lg-1 my-auto middle-video-description">test</div>
            </div>
        </Card>
    )
}
export default MiddleContentVideo;