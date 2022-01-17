import React from "react";
import styled from "@emotion/styled";
import "normalize.css";
import { colors } from "../../constants/colors";
import Navbar from "../navbar/Navbar";
import { Global } from "@emotion/react";
import { css } from "@emotion/css";
const Wrapper = styled.div`
  color: ${colors.primaryText};
  background-color: #181818;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1 1 auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Global
            styles={css`
              @font-face {
                font-family: "Gilroy Light,sans-serif";
                src: url("../../fonts/Gilroy-Light.otf") format("otf");
              }
            `}
          />
          <Navbar />
          <MainContent>{children}</MainContent>
          <div style={{ background: "green", marginTop: "auto" }}>
            <h1>footer</h1>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Layout;