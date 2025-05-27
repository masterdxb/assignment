import React, { memo } from 'react';
import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
} from 'react-aria-components';
import styles from './index.module.scss';

interface Props {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider = memo(({ value, onChange, min = 0, max = 100, step = 1 }:Props) => {

  return (  
  <AriaSlider
    className={styles.slider}
    value={value}
    minValue={min}
    maxValue={max}
    // step={step}
    onChange={onChange}
    aria-label="Storage size"

  >
    <SliderTrack style={{ ['--slider-fill-percentage' as any]: `${((value - min) / (max - min)) * 100}%` }} className={styles.track}>
      <SliderThumb className={styles.thumb} />
    </SliderTrack>
  </AriaSlider>
  );
}
);
