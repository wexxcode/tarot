import React, { CSSProperties } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const modalOverlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalContainerStyle: CSSProperties = {
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
  width: '80%',
  maxWidth: '600px',
  maxHeight: '90%',
  overflow: 'auto',
};

const modalHeaderStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ccc',
  borderRadius: '5px 5px 0 0',
};

const modalBodyStyle: CSSProperties = {
  padding: '10px',
  maxHeight: 'calc(90vh - 100px)',
  overflow: 'auto',
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContainerStyle}>
        <div style={modalHeaderStyle}>
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div style={modalBodyStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
