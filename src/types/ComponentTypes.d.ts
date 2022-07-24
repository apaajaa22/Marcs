type ButtonProps = {
  title: string;
  type?: 'primary' | 'secondary';
  onPress?: () => void;
};

type ButtonFuncProps = {
  onPressLogin?: () => void;
  onPressRegister?: () => void;
};
