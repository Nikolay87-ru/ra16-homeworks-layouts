import { useState } from 'react';

export const IconSwitch = () => {
  const [icon, onSwitch] = useState(true);

  const IconView = () => {
    onSwitch(!icon);
  }; 
}