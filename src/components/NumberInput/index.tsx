import React, { memo, useCallback } from 'react';
import { Button } from '../Button';
import styles from './index.module.scss';

interface Props {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberInput: React.FC<Props> = memo(({ value, onChange, min = 0, max = 100, step = 1 }) => {
  const decrement = useCallback(() => onChange(Math.max(min, value - step)), [value, step, min, onChange]);
  const increment = useCallback(() => onChange(Math.min(max, value + step)), [value, step, max, onChange]);

  return (
    <div className={styles.container}>
      <Button size="small" variant="outlined" onPress={decrement}>−</Button>
      <span className={styles.value}>{value}</span>
      <Button size="small" variant="outlined" onPress={increment}>＋</Button>
    </div>
  );
});
