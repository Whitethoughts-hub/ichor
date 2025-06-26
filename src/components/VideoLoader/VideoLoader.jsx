import { useNavigate } from 'react-router-dom';
import WebIntroVideo from '../../assets/videos/intro-video-web.mp4';
import MobileIntroVideo from '../../assets/videos/intro-video-mobile.mp4'
import './videoloader.css'
const VideoLoader = () => {
    const navigate=useNavigate();
    function loadTheMainWebsite(){  
        setTimeout(()=>{
        navigate("/window");
        },2000) 
        console.log("function called")
    }
    return (
        <>
        <video src={WebIntroVideo} className='video-web-view'  autoPlay muted onEnded={loadTheMainWebsite}></video>
        <video src={MobileIntroVideo} className='video-mobile-view'  autoPlay muted onEnded={loadTheMainWebsite}></video>
        </>
    )
}
export default VideoLoader;