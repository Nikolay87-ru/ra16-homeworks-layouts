import React from 'react';

type IconSwitchProps = {
  icon: 'view_list' | 'view_module';
  onSwitch: () => void;
};

export const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => (
  <button onClick={onSwitch}>
    <span className="material-icons text-5xl text-gray-700">{icon}</span>
  </button>
);
