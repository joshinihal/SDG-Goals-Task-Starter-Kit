import {useState} from 'react';
import classes from './Dropdown.module.css';

const Dropdown = (props) => {

  const [currentValue, setCurrentValue] = useState(props.defaultValueIndex);

  const handleOptionChange = (e) => {
    setCurrentValue(e.target.value);
    props.onChange(props.options[e.target.value]);
  }

  return (
    <div className={classes.selectContainer}>
      <label htmlFor={props.label}><b>{props.label}:</b></label>
      <select className={classes.selectField} id={props.label} value={currentValue} onChange={handleOptionChange}>
          {props.options.map((el,i) =><option value={i} key={el.id}>{el.value}</option>)}
      </select>
    </div>
  );
};

export default Dropdown;
