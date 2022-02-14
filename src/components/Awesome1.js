import AwesomeSlider from 'react-awesome-slider';
import withCaption from 'react-awesome-slider/dist/captioned';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import React from 'react';

 
const CaptionedSlider = withCaption(AwesomeSlider);
 
const component = (
  <CaptionedSlider
    startupScreen={StartupScreen}
    cssModule={CaptionedStyles}
    screens={[
      {
        backgroundColor: '#4a9c8c',
        media: '/images/series/ricknmorty-3.png',
        caption: 'I want to see what you got.',
      },
      {
        backgroundColor: '#4a9c8c',
        media: '/images/series/ricknmorty-3.png',
        caption: "The answer is -- Don't think about it.",
      },
    ]}
  />
);


export const Awesome1 = () => {
  return (
    <div className="App">
    <AwesomeSlider>
      {screens.map((d) => (
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} />
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc} </p>
            </div>
          </div>

          <div className="right">
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" />
          </div>
        </div>
      ))}
    </AwesomeSlider>
  </div>

  )
};
