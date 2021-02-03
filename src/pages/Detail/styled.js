import styled from "styled-components"

export const PathWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const PathLeftStyled = styled.div`
  // width: 50%;
  height: 130px;
  margin-right: 2px;
  flex: 1;
  background: #ced6e0;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 45% 65%, 40% 100%, 0 100%);
  transition: all 0.5s ease;

  &.disabled {
    background: #57606f;
    color: #747d8c;
  }

  &.disabled:hover {
    background: #57606f;
    color: #747d8c;
  }

  &:hover {
    background: #747d8c;
    transition: all 0.5s ease;
  }
`

export const PathRightStyled = styled.div`
  // width: 50%;
  height: 130px;
  margin-left: 2px;
  flex: 1;
  background: #ced6e0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 55% 65%, 0 65%);
  transition: all 0.5s ease;

  &.disabled {
    background: #57606f;
    color: #747d8c;
  }

  &.disabled:hover {
    background: #57606f;
    color: #747d8c;
  }

  &:hover {
    background: #747d8c;
    transition: all 0.5s ease;
  }
`

export const PathContent = styled.div`
  min-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const ContentWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  background-color: white;
`
