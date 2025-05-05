import { useStore } from './components/Store';
import { IconSwitch } from './components/IconSwitch';
import { CardsView } from './components/CardsView';
import { ListView } from './components/ListView';

export const App = () => {
  const { icon, onSwitch, viewMode, products } = useStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8">
        <IconSwitch icon={icon} onSwitch={onSwitch} />
      </div>
      {viewMode === 'cards' 
        ? <CardsView cards={products} /> 
        : <ListView items={products} />}
    </div>
  );
};
