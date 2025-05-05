import { useStore } from './components/Store';
import { IconSwitch, IconViewType } from './components/IconSwitch';
import { useState } from 'react';

export const App = () => {
  useStore();

  const [currentView, setCurrentView] = useState<IconViewType>('view_list');

  const handleSwitch = () => {
    setCurrentView((prev) => (prev === 'view_list' ? 'view_module' : 'view_list'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <IconSwitch icon={currentView} onSwitch={handleSwitch} />
      </div>
    </div>
  );
};
