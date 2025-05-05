import { useStore } from './components/Store';
import { IconSwitch } from './components/IconSwitch';


export const App = () => {
  const { icon, onSwitch } = useStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <IconSwitch icon={icon} onSwitch={onSwitch} />
      </div>

    </div>
  );
};
