import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icons } from './constants';
import styles from './styles';
import { IconSelectorProps } from './types';

const IconSelector = ({
  showIconSelector,
  hideIconSelector,
  onIconPress,
}: IconSelectorProps) => {
  const onIconSelection = (icon: ImageSourcePropType) => {
    onIconPress(icon);
    hideIconSelector();
  };

  if (showIconSelector)
    return (
      <View style={styles.ParentWrapper}>
        <View style={styles.ChildWrapper}>
          {Icons.map((icon, id) => (
            <TouchableOpacity onPress={() => onIconSelection(icon)} key={id}>
              <Image source={icon} style={styles.ImageStyle} key={id} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={hideIconSelector}>
          <Text style={styles.CancelTextStyle}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    );

  return undefined;
};

export default IconSelector;
