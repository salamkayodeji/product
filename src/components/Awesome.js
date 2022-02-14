import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
//import Tilt from '../../src';
import Tilt from 'react-parallax-tilt';
//import imgNyc from './img/nyc.jpg';
import withAutoplay from 'react-awesome-slider/dist/autoplay';



export default function Awesome() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
  };

  const contentStyle = {
    backgroundColor:"grey",
    color: "black",
    fontSize: "50px",
    marginTop: "20%",
    position: "absolute"
  };

  const smallStyle = {
   // fontSize:"10px"
    fontWeight:"bold",
    backgroundColor: "grey"
  };

  
  const data = [
    {
      id: 
        "1",
      icon:
      "https://coinmac.org/static/img/digital-marketing.png",
      title: 
        "Digital Marketting",
      desc:
        "Want to grow your customer base?",
      img: 
      "https://coinmac.org/static/img/digital-marketing.png"
    },
    {
      id: 
        "2",
      icon: 
        "https://coinmac.org/static/img/software.jpg",
      title: 
        "Software Development",
      desc:
        "We build professional applications for businesses and organizations.",
      img:
        "https://coinmac.org/static/img/software.jpg"
    },
    {
      id: 
        "3",
      icon: 
        "https://coinmac.org/static/img/office.jpg",
      title: 
        "Procurement",
      desc:
        "With a global network of supply chain partners, we offer our services both domestically in Nigeria and in the rest of Africa and the world!",
      img:
        "https://coinmac.org/static/img/office.jpg"
    },
    {
      id: 
        "4",
      icon: 
        "https://coinmac.org/static/img/bulletin-board.jpg",
      title: 
        "",
      desc:
        "",
      img:
        "https://coinmac.org/static/img/bulletin-board.jpg"
    }
  ];
  return (
    <Tilt
    className="tilt-img"
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    perspective={900}
    scale={1.1}
    transitionSpeed={2000}
    gyroscope={true}
    >

    <div className="App">

    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    >
        {data.map((d) => (
       <div className="item" style={{ zIndex: 2 }}>
            <div className="left">
              <div className="leftContainer">
              <h2 style={ contentStyle }>{d.title}</h2>
                <p style={smallStyle}>{d.desc} </p>

                <div className="imgContainer">
                  <img src={d.img} alt="slide" style={bgImg}/>
                </div>
                
              </div>
            </div>

          </div>
        ))}
      </AutoplaySlider>
    </div>
    </Tilt>

  );
}
