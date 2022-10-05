import React, { useRef, useState } from "react";

import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import IconButton from "@mui/material/IconButton";

export default function App() {
  const [openLogin, setLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleSignup = () => {
    setSignup(true);
  };
  return (
    <div>
      <Wrapper className="landingText" style={{ width: "100vw" }}>
        <Spline
          className="spline"
          scene="https://prod.spline.design/bF6arss6HizC3Mhq/scene.splinecode"
        />
        <Content className="content">
          <div style={{display: 'flex', justifyContent: "flex-end"}}>
            <IconButton className="landingButton1" size="large" color="inherit" onClick={handleLogin}>
              Login
              <LoginModal open={openLogin} setOpen={setLogin} />
            </IconButton>
            <IconButton className="landingButton2" size="large" color="inherit" onClick={handleSignup}>
              Signup
              <SignupModal open={openSignup} setOpen={setSignup} />
            </IconButton>
          </div>

          <div className="landingText">
            Create perfect <strong style={{ color: "#AC8AF9" }}>feeling</strong>{" "}
            for the moment
          </div>
          <p>
            Take time to understand and embrace{" "}
            <strong style={{ color: "#AC8AF9" }}>emotion</strong> with us!!!
            Millions of Emotions sold to satisfied customers.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link className="landingLink" to="/products">
              Unlock Your Inner
            </Link>
          </div>
        </Content>
      </Wrapper>
      <SectionDiv>
        <Section>CArd</Section>
        <Section>CArd</Section>
        <Section>CArd</Section>
      </SectionDiv>
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
  padding-right: 30px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  .landingText {
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  .landingLink {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    color: #ac8af9;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.51);
    padding-bottom: 0.5rem;
    width: 275px;
    font-size: 20px;
  }

  .landingButton1:hover{
    color: #ac8af9;
  }

  .landingButton2:hover{
    color: #ac8af9;
  }

  .landingLink:hover {
    color: #d66fb2;
    background-color: #e6e6e6;
    transition: all 0.2s;
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

const SectionDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  width: 150px;
  height: 200px;
  flex-grow: 1;
  display: flex;
  justify-content: column;
`;
