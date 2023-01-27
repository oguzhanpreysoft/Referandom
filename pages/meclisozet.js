import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "react-feather";
import Stories from 'react-insta-stories';
import React from "react";
import Head from 'next/head'
import { Inter } from '@next/font/google'
// import Image from 'next/image'

import Layout from '../Components/Layout'
import { Navbar, Link, Text, Avatar, Dropdown, Card, Grid, Row, Button, Spacer, Col, Progress, useTheme, Textarea, Image } from "@nextui-org/react";


const stories = [
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
            '>
              <div style='
                height: 675px;
                width: 375px;
                padding: 40px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background: url(https://i.picsum.photos/id/777/375/675.jpg?hmac=GtAgKtPxYwFSCUAw7Z49MDjTez2cf_uFu_PuWf9eNlo)
              '></div>
            </body>
          </html>`
  },
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
            '>
              <div style='
                height: 675px;
                width: 375px;
                padding: 40px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background: url(https://www.knightsmark.co.uk/wp-content/uploads/2020/11/4-Panel-Traditional-Door-Design-From-Side-View-375x675.jpg)
              '></div>
            </body>
          </html>`
  },
  {
    type: "iframe",
    html: `<html>
          <body style='
            margin: 0;
            padding: 0;
            overflow: hidden;
          '>
            <div style='
              height: 675px;
              width: 375px;
              padding: 40px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              background: url(https://www.knightsmark.co.uk/wp-content/uploads/2020/07/Security-French-Doors-White-Colour-with-Glazing-Bars-375x675.jpg)
            '></div>
          </body>
        </html>`
  },
  {
    type: "iframe",
    html: `<html>
          <body style='
            margin: 0;
            padding: 0;
            overflow: hidden;
          '>
            <div style='
              height: 675px;
              width: 375px;
              padding: 40px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              background: url(https://www.knightsmark.co.uk/wp-content/uploads/2020/07/Security-French-Doors-White-Colour-with-Glazing-Bars-375x675.jpg)
            '></div>
          </body>
        </html>`
  }
];

const isValidStory = (index) =>
  index >= 0 && index < stories.length ? index : 0;

const Iframe = ({ html }) => {
  return (
    <iframe
      title="container"
      style={{
        borderRadius: "16px"
      }}
      frameBorder="0"
      width="100%"
      height="100%"
      srcDoc={html}
    />
  );
};

const Renderer = ({ story, action, isPaused, config }) => {
  useEffect(() => {
    action("play");
  }, [story]);

  return <Iframe html={story.html} />;
};

const tester = (story) => {
  return {
    condition: story.type === "iframe",
    priority: 1
  };
};

const Preview = ({ index, isLeft }) => {
  const shouldNotDisplay =
    (index === 0 && isLeft) || (index === stories.length - 1 && !isLeft);

  return (
    <div
      style={{
        width: 250,
        height: 400,
        borderRadius: "16px",
        opacity: 0.5,
      }}
    >
      {shouldNotDisplay ? null : (
        <Iframe
          html={isLeft ? stories[index - 1].html : stories[index + 1].html}
        />
      )}
    </div>
  );
};

function meclisozet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStoryOver, setIsStoryOver] = useState(0);

  useEffect(() => {
    setIsStoryOver(currentIndex + 1 === stories.length);
  }, [currentIndex]);

  const handleStoryChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <Layout>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: '100vh',
        backgroundColor: "#575860"
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Preview index={currentIndex} isLeft={true}/>
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          padding: "0 20px"
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(0 50px)",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "10px",
            cursor: "pointer",
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(isValidStory(currentIndex - 1))}
        >
          <ChevronLeft color="#000" />
        </button>
        <Stories
          currentIndex={currentIndex}
          stories={stories}
          renderers={[{ renderer: Renderer, tester }]}
          defaultInterval={5000}
          loop={true}
          keyboardNavigation
          width={375}
          height={675}
          storyContainerStyles={{
            borderRadius: "16px"
          }}
          storyStyles={{
            borderRadius: "16px"
          }}
          onStoryStart={(index) => {
            handleStoryChange(index);
          }}
        />
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "10px",
            cursor: "pointer",
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
          disabled={currentIndex + 1 === stories.length && !isStoryOver}
          onClick={() => setCurrentIndex(isValidStory(currentIndex + 1))}
        >
          {isStoryOver ? (
            <RotateCcw color="white" />
          ) : (
            <ChevronRight key="1" color="#000" />
          )}
        </button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Preview index={currentIndex} isLeft={false} />
      </div>
    </div>
    </Layout>
  );
}

export default meclisozet;
