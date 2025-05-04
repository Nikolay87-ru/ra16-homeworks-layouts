import { icon, onSwitch } from './src/components/Store';

type iconProps = {
  icon: 'view_list' | 'view_module';
  onSwitch: () => void;
};

export const IconSwitch = ({ icon, onSwitch }: iconProps) => {
  return (
      <button className={`px-4 py-2`} onClick={() => onSwitch()}>
      {icon ? 'view_list' : 'view_module'}
      </button>
  );
};
