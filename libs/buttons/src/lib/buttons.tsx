import styled from 'tailwind';

/* eslint-disable-next-line */
export interface ButtonsProps {}

const StyledButtons = styled.div`
  color: pink;
`;

export function Buttons(props: ButtonsProps) {
  return (
    <StyledButtons>
      <h1>Welcome to Buttons!</h1>
    </StyledButtons>
  );
}

export default Buttons;
