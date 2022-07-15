import React from "react";
import styled from "styled-components";
import { grayColor, yellowColor, redColor } from "../style/css/ColorLists";
import "../style/css/fonts/fonts.css";

// Header
export const Header = styled.div`
  width: 100%;
  box-shadow: 1px 3px 2px 0px ${grayColor[0]};
`;

export const HeaderTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 5px 0;
`;

export const HeaderTopButtons = styled.div`
  display: flex;
  gap: 5px;
`;

export const HeaderTopButton = styled.span<{
  color?: string;
  weight?: number;
  size?: number;
}>`
  height: 20px;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size : "13")}px;
  margin-top: 5px;
  &.header_username {
    color: ${grayColor[3]};
    font-weight: 700;
    &: after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 10px;
      margin: 0 8px;
      background-color: ${grayColor[1]};
    }
  }
  &.header_logout {
    color: ${grayColor[4]};
    & :before {
      content: "·";
      color: ${grayColor[2]};
      display: inline-block;
      margin-right: 3px;
    }
  }
  &.header_help {
    color: ${grayColor[3]};
    &:before {
      content: "·";
      color: ${grayColor[2]};
      display: inline-block;
      margin: 0 3px 0 5px;
    }
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBottomItem = styled.div<{ cartCount?: number }>`
  margin: 10px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & .header_bt_cart {
    &:after {
      content: "${(props) => props.cartCount}";
      position: relative;
      display: inline-block;
      top: -15px;
      right: 8px;
      width: 20px;
      height: 20px;
      color: white;
      text-align: center;
      border-radius: 50%;
      background: ${redColor[3]};
      border: 1px solid ${redColor[2]};
    }
  }
`;

export const HeaderBottomItemFirst = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const HeaderBottomItemFirstText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: "ubuntu";
`;

export const HeaderBottomItemFirstImg = styled.img`
  width: 1.1em;
  border: 1px solid ${grayColor[1]};
  border-radius: 50%;
  padding: 5px;
`;

export const HeaderBottomItemSecond = styled.div`
  position: relative;
  width: 400px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      #fecc1f 5%,
      #fe3a6b 36%,
      #a33ffa 58%,
      #3798fb 78%,
      #26d866 99%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const HeaderBottomItemSecondBox = styled.div`
  background: white;
  height: 35px;
  padding: 0 5px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBottomItemSecondText = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const HeaderBottomItemSecondImg = styled.img`
  width: 1.4em;
`;
export const HeaderBottomItemSecondBest = styled.div`
  height: 35px;
  width: 130px;
  border: 1px solid ${grayColor[1]};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
`;

export const BestList = styled.div``;

export const BestLists = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 56px;
  z-index: 11;
  min-width: 230px;
  min-height: 460px;
  background: white;
`;

export const IconLists = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const IconList = styled.li`
  list-style: none;
`;

export const IconImg = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
`;

// Main
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const MainFirst = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 3px;
`;

export const MainFirstItem = styled.div`
  border-radius: 5px;
  width: 25%;
  height: 180px;
  border-radius: 4px;
  background: rgba(232, 234, 235, 0.3);
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
`;

export const BoxGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const GridItem = styled.div<{ size: number; fontSize?: number }>`
  width: ${(props) => props.size}%;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
  & > .secondLine {
    display: flex;
    align-items: center;
    font-size: 0.7em;
    gap: 3px;
  }
  .secondLine .secondLineIcon {
    cursor: pointer;
  }
`;

export const MainSecondItem = styled.div`
  border-radius: 5px;
  width: 25%;
  height: 180px;
  border-radius: 4px;
  background: rgba(232, 234, 235, 0.3);
  display: flex;
  padding: 30px;
  flex-direction: column;
  & .coupon_stat {
    margin-bottom: 35px;
  }
  .coupon_stat .coupon_title {
    font-size: 0.9em;
    font-weight: 800;
  }
  .coupon_stat .coupon_count {
    margin-top: 5px;
  }
  .coupon_stat .coupon_count .coupon_value_num {
    font-size: 1.7em;
    font-weight: 500;
  }
  .coupon_stat .coupon_count .coupon_value_text {
    font-size: 0.9em;
    margin-left: 4px;
  }
  .coupon_detail .coupon_possible {
    font-size: 0.9em;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export const MainThirdItem = styled.div`
  border-radius: 5px;
  width: 25%;
  height: 180px;
  border-radius: 4px;
  background: rgba(232, 234, 235, 0.3);
  display: flex;
  padding: 30px;
  flex-direction: column;
  & .money_stat {
    margin-bottom: 35px;
  }
  .money_stat .money_title {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 500;
  }
  .money_stat .money_count {
    margin-top: 5px;
  }
  .money_stat .money_count .money_value_num {
    font-size: 1.7em;
    font-weight: 500;
  }
  .money_stat .money_count .money_value_text {
    font-size: 0.8em;
    margin-left: 4px;
  }
  .money_detail .money_deposit {
    font-size: 0.9em;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .money_button {
    display: flex;
    width: 100%
    flex-direction: row;
    margin-top: 8px;
    justify-content: center;
  }

  .money_button .money_button_item {
    width: 50%;
  }

  .money_button .money_button_item_one {
    padding: 5px 0;
    width: 95%;
    background: #ff3e3e;
    border: 1px solid #ff3e3e;
    border-radius: 5px;
    color: white;
  }
  .money_button .money_button_item_two {
    padding: 5px 0;
    background: #000;
    border: 1px solid #000;
    border-radius: 5px;
    color: white;
    width: 95%;
  }

  .money_button .money_button_item_two_tooltip {
    position: relative;
    margin-top: 5px;
    font-size: 0.7em;
    border: 1px solid ${grayColor[2]};
    border-radius: 5px;
    padding: 8px;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 200%;
    left: -110%;
  }

  .money_button .money_button_item_two_tooltip:before {
    content: "";
    position: relative;
    border: 1px solid transparent;
    border-right-color: ${grayColor[2]};
    border-bottom-color: ${grayColor[2]};
    background: white;
    width: 6px;
    height: 6px;
    box-sizing: border-box;
    bottom: 11px;
    left: 70%;
    z-index: 1;
    transform: rotate(-135deg);
  }
`;

export const MainFourthItem = styled.div`
  border-radius: 5px;
  width: 25%;
  height: 180px;
  border-radius: 4px;
  background: rgba(232, 234, 235, 0.3);
  display: flex;
  padding: 30px;
  flex-direction: column;
  & .point_stat {
    margin-bottom: 35px;
  }
  .point_stat .point_title {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 500;
  }
  .point_stat .point_count {
    margin-top: 5px;
  }
  .point_stat .point_count .point_value_num {
    font-size: 1.7em;
    font-weight: 500;
  }
  .point_stat .point_count .point_value_text {
    font-size: 0.9em;
    margin-left: 4px;
  }
  .point_detail {
    font-size: 0.9em;
    margin-top: 5px;
  }
`;

export const MainSecond = styled.div`
  width: 95%;
  height: 100px;
  border: 1px solid #a78353;
  border-radius: 5px;
  margin-top: 15px;
  background: #a78353;
  padding: 20px;
  display: flex;
  flex-direciton: row;
  align-items: center;
`;

export const MainSecondBox = styled.div<{ size: number }>`
  color: white;
  width: ${(props) => props.size}%;
  & .banner_text {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8em;
    color: ${yellowColor[3]};
  }
  .banner_sub_text {
    font-size: 1.1em;
    font-weight: 700;
  }

  .banner_end_btn {
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #966e46;
    padding: 10px;
  }
`;

export const MainThird = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  & .third_side {
    margin: 0 20px;
    padding: 25px;
    border: 1px solid ${grayColor[1]};
    border-radius: 8px;
    width: 10%;
    display: flex;
    flex-direction: column;
  }

  & .third_body {
    width: 70%;
  }
`;

export const SideBar = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9em;
  color: ${grayColor[3]};
  & .side_first_title,
  .side_second_title {
    color: #000;
    font-weight: 700;
    margin: 5px 0;
  }
  &: after {
    content: "";
    margin: 10px 0 15px 0;
    display: inline-block;
    border-bottom: 1px solid ${grayColor[1]};
  }
`;

export const SideList = styled.li`
  list-style: none;
`;

export const BodyTitle = styled.div<{
  marginTop?: number;
  marginBottom?: number;
  borderBottom: boolean;
}>`
  font-size: 1.1em;
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: space-between;
  padding-bottom: 8px;
  ${(props) =>
    props.borderBottom === false ? "" : "border-bottom: 2px solid #000;"}
  ${(props) => (props.marginTop ? "margin-top:" + props.marginTop + "px" : "")};
  ${(props) =>
    props.marginBottom ? "margin-bottom:" + props.marginBottom + "px" : ""};
  & .title_showall {
    font-size: 0.8em;
    color: ${grayColor[3]};
  }
`;

export const MainThirdBody = styled.div`
  margin-left: 15px;
  & .order_body .order_stat {
    margin-top: 10px;
    & .order_table {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 12px 17px;
      border: 2px solid black;
      border-radius: 5px;
      gap: 15px;
      width: 100%;
      & .order_stat_list {
        width: 20%;
        list-style: none;
        font-size: 0.8em;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & .list_val {
          font-size: 1.1em;
          color: ${grayColor[2]};
          &:after {
            content: "";
            width: 1px;
            height: 15px;
            display: inline-block;
            margin-left: 15px;
            margin-top: 5px;
            background: ${grayColor[1]};
            vertical-align: -10%;
          }
        }
      }
    }
  }

  & .refund_stat {
    margin-top: 10px;
    & .refund_table {
      margin: 0;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${grayColor[0]};
      border-radius: 5px;
      color: ${grayColor[3]};
      gap: 15px;
      width: 100%;
      & .refund_list {
        width: 25%;
        list-style: none;
        font-size: 0.8em;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & .list_val {
          font-size: 1.1em;
          color: ${grayColor[2]};
          &:after {
            content: "";
            width: 1px;
            height: 15px;
            display: inline-block;
            margin-left: 15px;
            margin-top: 5px;
            background: ${grayColor[1]};
            vertical-align: -10%;
          }
        }
      }
    }
  }
`;

export const BodyItemBox = styled.div`
  & .body_item_notice {
    font-size: 0.8em;
    color: ${grayColor[2]};
  }

  & .body_item_list {
    border: 1px solid black;
  }
`;
