import ReactPlayer from "react-player";

function VideoPlayer() {
    return (
        <div className="col-12 p-4 ">
            <ReactPlayer url='https://www.youtube.com/watch?v=2W4tFvWdPPA' width="100%" />
        </div>
    )
}
export default VideoPlayer;