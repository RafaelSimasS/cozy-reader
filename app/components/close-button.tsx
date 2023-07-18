import React from 'react';
import { CloseButtonProps } from '../types/types';
import Image from 'next/image';

import buttonStyles from './buttons.module.css';

const CloseButton: React.FC<CloseButtonProps> = ({onClick, style}) => {
    return (
        <button className={`${buttonStyles.closeButton}`} onClick={onClick} style={style} >
            <Image 
              src="/icons/close-round.svg"
              alt='Close'
              width={21}
              height={21}
              className={`${buttonStyles.closeIcon}`}
            />
        </button>
      );
}

export default CloseButton