import React from 'react';
import Modal from 'react-modal'

export default function CustomModal({ show, children, onClose }) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)'
        },
        content: {
          position: 'absolute',
          top: '15%',
          left: '31%',
          right: '31%',
          bottom: '15%',
          border: '2px solid #E0E0E0',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          // borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
    >
      {children}
    </Modal>
  );
}