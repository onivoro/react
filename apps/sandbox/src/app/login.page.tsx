import { LoginForm, TLoginFormData } from './login-form';
import { Card } from '@onivoro/react-components';

export default function LoginPage() {
  let data: TLoginFormData = {} as any;

  function onSubmit() {
    console.warn({ data })
  }

  return (
    <Card>
      <div>Login</div>
      <LoginForm onChange={(_: TLoginFormData) => data = _}></LoginForm>
      <button onClick={onSubmit}>
        {`Let's go!`}
      </button>
    </Card>
  );
}
