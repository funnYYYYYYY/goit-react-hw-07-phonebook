import { Title } from 'components/Form/Form.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </>
  );
};
