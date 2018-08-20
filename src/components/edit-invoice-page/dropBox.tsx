import * as React from 'react';

import { Input } from 'reactstrap';

const DropBox = ({
                   id, name, values, onChange, selected,
                 }) => {
  return (
    <Input value={selected} onChange={onChange} type='select' name={name} id={id} >
      <option disabled={true} selected={true} value='' >{
        // add items placeholder
      }</option>
      {values ? values.map((elem) => <option value={elem.id} key={elem.id}>{elem.name}</option>) : null}
    </Input>
  );
}

export default DropBox;
