import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/ConfirmDelete.css'

Modal.setAppElement('#root');

const DeleteConfirmation = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Deletion"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Xác nhận xóa nhà giam</h2>
      <p>Bạn có chắc chắn muốn xóa nhà giam?</p>
      <div className='action-confirm'>
        <button onClick={onClose}>Hủy</button>
        <button onClick={onConfirm}>Xác nhận</button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;