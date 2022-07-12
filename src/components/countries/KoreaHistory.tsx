import React from "react";
import {
  Modal,
  ModalReligionSection,
  ModalReligionHead,
  ModalCloseReligionButton,
  ModalReligionBody,
} from "../../items/boxes/ModalBox";

interface KoreaProps {
  open: boolean;
  close: () => void;
}

function KoreaReligion({ open, close }: KoreaProps) {
  return (
    <React.Fragment>
      {open === true && (
        <Modal>
          <ModalReligionSection>
            <ModalReligionHead>History</ModalReligionHead>
            <ModalReligionBody>History List</ModalReligionBody>
          </ModalReligionSection>
          <ModalCloseReligionButton
            type="button"
            className="close"
            onClick={close}
          ></ModalCloseReligionButton>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default KoreaReligion;
