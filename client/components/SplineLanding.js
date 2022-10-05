
import React, { useRef, useState } from "react";

import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function App() {

  return (
    <div>
    <Wrapper
      className="landingText"
      style={{width: "100vw", }}
    >
      <Spline
        className="spline"
        scene="https://prod.spline.design/gj9XL0OmiXk3c3GX/scene.splinecode"
      />
      <Content

      >
        <div className='landingText'>Create perfect <strong style={{color: "#AC8AF9"}}>feeling</strong> for the moment</div>
        <p>
          Take time to understand and embrace <strong style={{color: "#AC8AF9"}}>emotion</strong> with us!!!   Millions of Emotions sold to satisfied customers.
        </p>
        <Link className="landingLink" to="/products">Unlock Your Inner</Link>
      </Content>
    </Wrapper>
    <div style={{color: "white"}}>
      Card
    </div>
    </div>
  );
}

const Wrapper = styled.div`
  font-family: Comic Sans MS, sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;


  .spline(
    position: absolute;
    object-fit: contain;
    margin: 0;
    top: 0;
    right: 0;
  )

`;
const Content = styled.div`
    position: absolute;
    top: 30px;
    padding-right: 70px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 80px;

    .landingText{
      font-weight: bold;
      font-size: 70px;
      margin: 0;
      max-width: 500px;
    }

    p{
      font-weight: normal;
      line-height: 150%;
      max-width: 380px;
    }

    .landingLink {
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      color: #AC8AF9;
      outline: none;
      border: none;
      font-weight: 700;
      border-radius: .2vw;
      padding-left: 2rem;
      padding-right: 2rem;
      margin-right: 1rem;
      padding-top: .5rem;
      background-color: rgba(51, 51, 51, .51);
      padding-bottom: .5rem;
    }

    .landingLink:hover {
      color: #AC8AF9;
      background-color: #e6e6e6;
      transition: all .2s;
    }

    .landingText, p{
      margin: 0 30px 0 100px;
    }
`

{
  /* <div style={{backgroundColor: "slateGrey", fontSize: '86px'}}></div> */
}
