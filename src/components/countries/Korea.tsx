import React, { useState } from "react";
import {
  Modal,
  ModalSection,
  ModalHead,
  ModalButtonGroup,
  ModalButton,
  ModalCloseButton,
} from "../../items/boxes/ModalBox";
import KoreaEN from "../../items/img/Korea.svg";
import KoreaReligion from "./KoreaReligion";
import KoreaHistory from "./KoreaHistory";

interface KoreaProps {
  close: () => void;
}

function Korea({ close }: KoreaProps) {
  const [openReligion, setOpenReligion] = useState<boolean>(false);
  const [openHistroy, setOpenHistory] = useState<boolean>(false);
  const openReligionModal = () => {
    setOpenReligion(true);
  };
  const closeReligionModal = () => {
    setOpenReligion(false);
  };
  const openHistroyModal = () => {
    setOpenHistory(true);
  };
  const closeHistroyModal = () => {
    setOpenHistory(false);
  };
  return (
    <Modal>
      <ModalSection>
        <ModalHead>
          <img src={KoreaEN} alt="countryText" width="500"></img>
        </ModalHead>
        <ModalButtonGroup>
          <ModalButton onClick={openReligionModal}>Religion</ModalButton>
          <KoreaReligion
            open={openReligion}
            close={closeReligionModal}
          ></KoreaReligion>
          <ModalButton onClick={openHistroyModal}>History</ModalButton>
          <KoreaHistory
            open={openHistroy}
            close={closeHistroyModal}
          ></KoreaHistory>
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
