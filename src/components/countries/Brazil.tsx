import React from "react";
import {
  Modal,
  ModalSection,
  ModalHead,
  ModalButtonGroup,
  ModalButton,
  ModalCloseButton,
} from "../../items/boxes/ModalBox";
import BrazilEN from "../../items/img/Brazil.svg";

interface KoreaProps {
  close: () => void;
}

function Korea({ close }: KoreaProps) {
  return (
    <Modal>
      <ModalSection>
        <ModalHead>
          <img src={BrazilEN} alt="countryText" width="500"></img>
        </ModalHead>
        <ModalButtonGroup>
          <ModalButton>Religion</ModalButton>
          <ModalButton>History</ModalButton>
        </ModalButtonGroup>
        <ModalCloseButton
          type="button"
          className="close"
          onClick={close}
        ></ModalCloseButton>
      </ModalSection>
    </Modal>
  );
}

export default Korea;
