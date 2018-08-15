import React from 'react'

import { Input } from 'reactstrap';

const DropBox = ({id, name, values, onSelectChange}) => {
    return (
        <Input onChange={onSelectChange} type="select" name={name} id={id}>
            <option value=""></option>
            {values?values.map(elem => <option value={elem.id}>{elem.name}</option>):null}
        </Input>
    )
}

export default DropBox
