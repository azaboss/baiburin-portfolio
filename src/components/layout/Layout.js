import React from "react";
import styled from "@emotion/styled";
import "normalize.css";
import { colors } from "../../constants/colors";
import Navbar from "../navbar/Navbar";
import "../../css/typography.css";
import Footer from "../footer";

const Wrapper = styled.div`
  color: ${colors.primaryText};
  background-color: #181818;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
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
          <Navbar />
          <MainContent>{children}</MainContent>
          <Footer />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Layout;
