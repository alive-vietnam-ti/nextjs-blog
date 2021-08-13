import { useState } from "react";
import Modal from "../components/Modal";

export default function () {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  return (
    <div className="container">
      {openModal && (<Modal />)}
      <button onClick={handleOpenModal}>Open modal</button>
    </div>
  )
}