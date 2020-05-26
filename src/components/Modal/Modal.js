import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.getElementsByTagName('body')[0];
const el = document.createElement('div');

export const Modal = ({ children }) => {
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [children]);

  return ReactDOM.createPortal(children, el);
};
