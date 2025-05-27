import React, { memo } from 'react';
import { Input as AriaInput, Label } from 'react-aria-components';
import styles from './index.module.scss';

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = memo(({ label, value, onChange, placeholder, disabled=false }:Props) => (
  <div className={styles.wrapper}>
    <Label className={styles.label}>{label}</Label>
    <AriaInput
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      isDisabled={disabled}
    />
  </div>
));
