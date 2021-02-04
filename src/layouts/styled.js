import styled from "styled-components"

export const BgStyled = styled.div`
  background-image: url(${(props) => props.img});
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

export const ContainerStyled = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: white;
`

export const ChildrenStyled = styled.div`
  padding-top: 2rem;
`

export const ContentStyled = styled.div`
  // padding: 1rem;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const NavbarStyled = styled.div`
  padding: 1rem;
  margin: auto 2rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
