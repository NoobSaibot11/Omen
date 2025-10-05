import { ImageSourcePropType } from 'react-native';

export type IconSelectorProps = {
  showIconSelector: boolean;
  hideIconSelector: () => void;
  onIconPress: (icon: ImageSourcePropType) => void;
};
