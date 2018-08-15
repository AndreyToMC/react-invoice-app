import React from 'react'

import { Input } from 'reactstrap';

const DropBox = ({defaultValue, id, name, values, onSelectChange}) => {
    return (
        <Input value={defaultValue} onChange={onSelectChange} type="select" name={name} id={id}>
            <option value="default"></option>
            {values?values.map(elem => <option  value={elem.id}>{elem.name}</option>):null}
        </Input>
    )
}

export default DropBox
