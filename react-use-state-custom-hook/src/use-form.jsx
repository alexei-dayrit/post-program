import { useState } from 'react';

export default function UseForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [values, function (event) {
    // console.log('event name:', event.target.name);
    // console.log('event value:', event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }];
}
