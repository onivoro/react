import { FC, useState } from 'react';
import { ManagedForm, TFormFields } from '@onivoro/react-forms';

export type TLoginFormData = {username: string, password: string};

export const LoginForm: FC<{ onChange: any }> = ({ onChange }) => {

  const config: TFormFields<TLoginFormData> = {
    username: {
      type: 'text',
    },
    password: {
      type: 'password'
    }
  };

  return <form>
    <ManagedForm config={config} layout={[['username'], ['password']]} value={undefined} onChange={onChange}></ManagedForm>
  </form>;
};
