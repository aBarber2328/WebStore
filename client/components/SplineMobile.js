import React from "react";

import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import LandingFooter from "./LandingFooter";
import Navbar from "./Navbar";

export default function App({ username }) {
  return (
    <div>
      <Navbar />
      <Wrapper className="landingText" style={{ width: "100vw" }}>
        <Spline
          className="spline"
          scene="https://prod.spline.design/gj9XL0OmiXk3c3GX/scene.splinecode"
        />

        <Content className="content">
          <div
            className="landingText"
            style={{
              fontFamily: "Comic Sans MS",
              fontSize: "20px",
            }}
          >
            Create perfect{" "}
            <strong style={{ color: "#AC8AF9" }}>feelings</strong> for the
            moment
          </div>
        </Content>
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "-webkit-sticky",
        }}
      >
        <Link className="landingLink" to="/products">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span
              style={{ alignSelf: "center", fontSize: "20px", color: "white" }}
            >
              Unlock Your Inner
            </span>
            <img
              className="landingImg"
              style={{ alignSelf: "center" }}
              src="feeling.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <SectionBreak>
        <div className="landingBreak"></div>
      </SectionBreak>
      <div
        style={{ height: "2px", backgroundColor: "#d66fb2", fontSize: "1px" }}
      ></div>

      <SectionBreak>
        <div className="landingBreak"></div>
      </SectionBreak>
      <LandingFooter />
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
  top: 20px;
  padding-right: 15px;
  padding-top: 5px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  .landingText {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    max-width: 250px;
    justify-content: flex-end;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  .landingLink {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    color: #ac8af9;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 275px;
    font-size: 20px;
  }

  .landingLink:hover {
    color: #d66fb2;
    transition: all 0.2s;
    transform: scale(1.5);
  }

  .landingImg:hover {
    box-shadow: 8px 8px 8px 4px rgba(0, 0, 0, 0.2);
  }

  .landingText,
  p {
    margin: 0 30px 0 100px;
  }
  .landingText:hover {
    color: #d66fb2;
    transition: all 0.2s;
  }
`;

const SectionBreak = styled.div`
  width: 100vw;
  height: 4px;
  background: #352e2e;
  fontsize: 1px;
`;
