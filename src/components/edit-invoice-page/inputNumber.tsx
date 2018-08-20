import * as React from 'react';

import { Input } from 'reactstrap';

const InputNumber = ({value, onChange, name, id}) => (<Input onChange={onChange} value={value} type='number' name={name} id={id} />)

export default InputNumber
