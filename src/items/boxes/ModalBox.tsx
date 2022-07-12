import styled from "styled-components";
import "../../style/css/fonts/fonts.css";
import { grayColor } from "../../style/css/ColorLists";
import CloseIcon from "../img/CloseIcon.svg";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalSection = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const ModalHead = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  font-family: "ubuntu";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-bottom: 8px;
  background: none;
  color: white;
  font-size: 1.3em;
  letter-spacing: 0.2em;
  font-weight: 500;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  right: 25%;
  border: none;
  background: none;
  background-image: url(${CloseIcon});
  width: 30px;
  height: 30px;
`;

// Religion
export const ModalReligionSection = styled.div`
  width: 50%;
  min-height: 50vh;
  border-radius: 5px;
  background: white;
`;

export const ModalReligionHead = styled.div`
  display: flex;
  padding: 8px;
  font-size: 16px;
  font-family: "ubuntu";
  border-bottom: 1px solid ${grayColor[2]};
`;

export const ModalReligionBody = styled.div`
  background: ${grayColor[1]};
  display: flex;
  padding: 10px;
`;

export const ModalCloseReligionButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  top: 20%;
  right: 21%;
  border: none;
  color: white;
  background: none;
  background-image: url(${CloseIcon});
  background-size: 40px;
  width: 40px;
  height: 40px;
`;
