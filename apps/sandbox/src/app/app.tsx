import { Route, Routes } from 'react-router-dom';
import LoginPage from './login.page';
import { Body, Theme } from '@onivoro/react-components';

export function App() {
  return (
    <Theme
      base='#020620'
      contrast='#E6FAFC'
      primary='#B18FCF'
      success='#3A7D44'
      info='#5D737E'
      warn='#FABC2A'
      danger='#FF5714'
      font={`'Segoe UI', system-ui, ui-serif, ui-sans-serif, ui-rounded, ui-monospace;`}
    >
      <Body style={{padding: '1rem'}}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <LoginPage></LoginPage>
              </div>
            }
          />
        </Routes>
      </Body>
    </Theme>
  );
}

export default App;
