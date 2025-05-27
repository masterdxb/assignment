import React, {  memo } from 'react';
import type { ReactNode} from 'react';
import styles from './index.module.scss';
import type { ButtonVariant, ButtonSize, ButtonColor } from '../../types'; 
import { Button as AriaButton } from 'react-aria-components';

interface Props {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonComponent  = memo(({ 
  children, 
  size = 'medium', 
  variant = 'contained', 
  color = 'primary', 
  disabled = false, 
  onPress 
}:Props) => {
  const className = [
    styles.button,
    styles[size],
    styles[variant],
    styles[color],
    disabled ? styles.disabled : ''
  ].join(' ');

  return (
    <AriaButton className={className} isDisabled={disabled} onPress={onPress}>
      {children}
    </AriaButton>
  );
});
export const Button = ButtonComponent;