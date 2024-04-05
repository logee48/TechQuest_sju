import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./style.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Main = ()=>{
    return(
        <div>
            <div id="one_page">
                <AutoplaySlider
                    style={{height:"80vh"}}
                    bullets={false}
                    play={true}
                    cancelOnInteraction={false}
                    interval={2000}>
                <div><img src='./image/test.png' alt='fddsg'/></div>
                <div><img src='./image/test.png' alt='fddsg'></img></div>
                <div><img src='./image/test.png' alt='fddsg'></img></div>
                </AutoplaySlider>
            </div>
            <a href="#sec_page"><div style={{position:"relative",top:"-100px"}}>
                <div class="mouse_scroll">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                    <div>
                        <span class="m_scroll_arrows unu"></span>
                        <span class="m_scroll_arrows doi"></span>
                        <span class="m_scroll_arrows trei"></span>
                    </div>
                </div>
            </div></a>
            <div id="sec_page"><h1>TEST ONE</h1>
            
            <a href="#one_page"><div style={{padding:"100px"}}>dfkdjnkfdnk</div></a>
            </div>

        </div>
    )
}

export default Main