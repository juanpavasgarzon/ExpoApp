import Ionicons from '@expo/vector-icons/Ionicons';
import { type ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface TabBarAssingProps {
  color: string;
  focused: boolean;
};

export const TabBarIcon = (focusedIcon: IconName, blurIcon: IconName) => ({ color, focused }: TabBarAssingProps) => (
  <Ionicons
    size={25}
    name={focused ? blurIcon : focusedIcon}
    color={color}
  />
)