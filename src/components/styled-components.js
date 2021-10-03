import styled from "styled-components"
import { above } from "../utils/media-queries-utils"

export const Wrapper = styled.div`
  min-height: calc(100vh - 90px);
  background: #f6f6f6;
  padding: 80px 0 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuestionContainer = styled.div`
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  display: block;
  max-width: 615px;
  ${(props) => !props.isFullWidth && 'width: 96%'};
  margin: 0 auto;
  color: #1f2158;
  font-weight: bold;
  font-family: Montserrat;
  ${above.small`
    font-size: 30px;
    padding: 0;
  `}
`

export const DescriptionContainer = styled.div`
  font-weight: 500;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  max-width: 490px;
  ${(props) => !props.isFullWidth && 'width: 96%'};
  display: block;
  margin: 18px auto 10px auto;
  color: #303030;
  font-family: Montserrat;
  ${above.small`
    font-size: 23px;
    padding: 0;
  `}
`

export const ButtonGradient = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  background: linear-gradient(45deg, #444781, #4cb3de);
  font-weight: bold !important;
  text-decoration: none;
  width: 365px;
  font-style: normal;
  text-align: center;
  line-height: 57px;
  font-size: 24px;
  border-radius: 25px;
  color: #fff;
  border: none;
  svg {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-width: 3px;
  }
  margin: 10px auto 20px;
  ${(props) =>
    props.continue &&
    ` width: 300px !important;
      padding: 7px;
      margin: 108px auto 30px;`}
`

export const Testimonial = styled.div`
  max-width: 750px;
  width: 90%;
  margin: 22px auto 90px auto;
  position: relative;
  .testimonial {
    font-size: 22px;
    color: #1f2158;
    font-family: Montserrat;
    line-height: 28px;
    font-weight: 500;
    display: inline-block;
    margin: 0 30px;
  }
  .left-border {
    width: 28px;
    height: 28px;
    border-top: 2px solid #1f2158;
    border-left: 2px solid #1f2158;
    position: relative;
    display: inline-block;
    top: 15px;
    left: 8px;
  }
  .right-border {
    width: 28px;
    height: 28px;
    border-right: 2px solid #1f2158;
    border-bottom: 2px solid #1f2158;
    position: absolute;
    display: inline-block;
    bottom: -5px;
    right: 8px;
  }
`
