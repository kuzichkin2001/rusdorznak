import './Checkbox.scss'
import { useState } from 'react'

import checkbox from '../../assets/imgs/check.svg'

function Checkbox({ checkFor, setCheckFor, size }) {
  const [checked, check] = useState(false);

  return (
    <div
      className="checkbox"
      style={{
        width: size,
        height: size,
        backgroundColor: checked && '#de3409'
      }}
      onClick={() => {
        check(prev => !prev)
      }}
    >
      {checked && <img src={checkbox} alt="Galochka" />}
    </div>
  );
}

export default Checkbox
