import {useState} from 'react';
import classes from './Dropdown.module.css';

const Dropdown = (props) => {

  const [currentValue, setCurrentValue] = useState(props.options[0]);

  const handleOptionChange = (e) => {
    setCurrentValue(e.target.value);
  }

  return (
    <div>
      <label htmlFor="selectField"> {props.label} </label>
      <select className={classes.selectField} id="selectField" value={currentValue} onChange={handleOptionChange}>
          {props.options.map(el =><option key={el.id}>{el.value}</option>)}
      </select>
    </div>
  );
};

export default Dropdown;
