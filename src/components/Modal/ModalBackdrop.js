import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: ${(props) => props.opacity || 0};
`;

export const ModalBackdrop = (props) => {
  return <Backdrop {...props} />;
};
