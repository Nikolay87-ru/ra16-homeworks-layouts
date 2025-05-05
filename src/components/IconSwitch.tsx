import React from 'react';

export type IconViewType = 'view_list' | 'view_module';

type IconSwitchProps = {
  icon: IconViewType;
  onSwitch: () => void;
};

export const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => (
  <button onClick={onSwitch}>
    <span className="material-icons text-5xl text-gray-700">{icon}</span>
  </button>
);
