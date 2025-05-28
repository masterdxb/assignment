import React, { useCallback, useState } from 'react';
import { Input } from './components/Input';
import { NumberInput } from './components/NumberInput';
import { Slider } from './components/Slider';
import { Button } from './components/Button';
import styles from './App.module.scss';
import deleteIcon from './assets/delete.png'; 

const App = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState(0);

  const handleClear = useCallback(() => {
    setName('');
    setSize(0);
  }, []);

  const handleSubmit = useCallback(() => {
    alert(`Name: ${name}\nSize: ${size} GB`);
  }, [name, size]);

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <fieldset>
        <Input label="Name" value={name} onChange={setName} placeholder="enter text" />
        <div className={styles.sizeSection}>
          <label>Size [GB]</label>
          <div className={styles.inputSlider}>
            <NumberInput value={size} onChange={setSize} min={0} max={100} step={1} />
            <Slider value={size} onChange={setSize} min={0} max={100} step={1} />
          </div>
        </div>
        <div className={styles.actions}>
          <Button variant="outlined" color="secondary" onPress={handleClear}><img src={deleteIcon}/> Clear</Button>
          <Button variant="contained" color="primary" onPress={handleSubmit}>Submit</Button>
        </div>
      </fieldset>
    </form>
  );
};


export default App
