import React from "react"

import Navbar from "../../layouts/Navbar"
import BgGrey from "../../assets/images/container_bg.png"
import { BgStyled } from "../../layouts/styles"
import {
  PathLeftStyled,
  PathRightStyled,
  PathWrapper,
  ContentWrapper,
  ContainerWrapper,
  PathContent,
} from "./styled"

export default () => {
  const statePokemon = useSelector((state) => state)
  const dispatch = useDispatch()
  
  const getLast = () => {}

  return (
    <>
      <Navbar />
      <ContainerWrapper>
        <PathWrapper>
          <PathLeftStyled className="disabled">
            <PathContent>
              <span>lala</span>
            </PathContent>
          </PathLeftStyled>
          <PathRightStyled>
            <PathContent>
              <span>lala</span>
            </PathContent>
          </PathRightStyled>
        </PathWrapper>
        <BgStyled img={BgGrey}>
          <ContentWrapper>
            <span>lalal</span>
          </ContentWrapper>
        </BgStyled>
      </ContainerWrapper>
    </>
  )
}
