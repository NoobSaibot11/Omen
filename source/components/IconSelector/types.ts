import { iconNames } from '../../utils/IconMap';

export type IconSelectorProps = {
  showIconSelector: boolean;
  hideIconSelector: () => void;
  onIconPress: (icon: iconNames) => void;
};
