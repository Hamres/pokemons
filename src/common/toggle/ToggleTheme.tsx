import React, { useEffect, useState } from 'react';
import 'rsuite/Toggle/styles/index.css';
import { Toggle } from 'rsuite';

const ToggleTheme = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  useEffect(() => {
    const htmlElement = document.querySelector('html')!;

    if (checked) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [checked]);

 return (
  <>
   <Toggle
     checked={checked}
     onChange={setChecked}
   />
  </>
 );
};

export default ToggleTheme;