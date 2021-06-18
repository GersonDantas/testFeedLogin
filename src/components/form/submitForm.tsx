import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import Form from '.';

interface Props {
  onSubmit: SubmitHandler<any>
}

const SubmitForm: React.FC<Props> = ({children, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  )
}

export default SubmitForm;