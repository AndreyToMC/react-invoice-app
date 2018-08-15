import React from 'react'

import { Input } from 'reactstrap';

const InputNumber = ({value, onChange}) => (<Input onChange={onChange} value={value} type="number" name="inputNumber" id="exampleSelect" />)

export default InputNumber
