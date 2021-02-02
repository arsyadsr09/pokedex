import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import BgBlack from "../assets/images/body_bg.png"
import BgGrey from "../assets/images/container_bg.png"

const BgStyled = styled.div`
  background-image: url(${(props) => props.img});
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

const ContainerStyled = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: white;
`

const ChildrenStyled = styled.div`
  margin-top: 3rem;
`

const ContentStyled = styled.div`
  padding: 1rem;
  width: 80%;
  min-height: 100vh;
  background-color: white;
`

export default (props) => (
  <BgStyled img={BgBlack}>
    <ContainerStyled>
      <BgStyled img={BgGrey}>
        <ContentStyled>
          <Navbar />
          <ChildrenStyled>{props.children}</ChildrenStyled>
        </ContentStyled>
      </BgStyled>
    </ContainerStyled>
  </BgStyled>
)
