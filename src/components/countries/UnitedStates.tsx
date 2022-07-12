import React from "react";
import {
  Modal,
  ModalSection,
  ModalHead,
  ModalButton,
  ModalButtonGroup,
  ModalCloseButton,
} from "../../items/boxes/ModalBox";
import UnitedStatesEN from "../../items/img/UnitedStates.svg";

interface KoreaProps {
  close: () => void;
}

function Korea({ close }: KoreaProps) {
  return (
    <Modal>
      <ModalSection>
        <ModalHead>
          <img src={UnitedStatesEN} alt="countryText" width="500"></img>
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
