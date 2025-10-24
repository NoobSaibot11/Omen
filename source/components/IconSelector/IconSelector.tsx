import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import { IconSelectorProps } from './types';
import { iconNames, Icons } from '../../utils/IconMap';

const IconSelector = ({
  showIconSelector,
  hideIconSelector,
  onIconPress,
}: IconSelectorProps) => {
  const onIconSelection = (icon: iconNames) => {
    onIconPress(icon);
    hideIconSelector();
  };

  if (showIconSelector)
    return (
      <View style={styles.ParentWrapper}>
        <View style={styles.ChildWrapper}>
          {(
            Object.entries(Icons) as unknown as [
              iconNames,
              ImageSourcePropType,
            ][]
          ).map((icon, id) => {
            if (String(icon[0]) === String(iconNames.placeholder)) return null;

            return (
              <TouchableOpacity
                onPress={() => onIconSelection(icon[0])}
                key={id}
              >
                <Image source={icon[1]} style={styles.ImageStyle} key={id} />
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity onPress={hideIconSelector}>
          <Text style={styles.CancelTextStyle}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    );

  return undefined;
};

export default IconSelector;
