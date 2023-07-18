import React from 'react';
import CloseButton from './close-button';
import { LogInPopupProps } from '../types/types';

const LogInPopup: React.FC<LogInPopupProps> = ({handleClose}) => {
    return (
        <div className="popupContent">
          <h2>Log In Popup</h2>
          <p>Popup content...</p>
          <CloseButton onClick={handleClose} />
        </div>
      );
}


export default LogInPopup;