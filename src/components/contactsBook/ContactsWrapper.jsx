import PropTypes from 'prop-types';
import { Title } from 'components/Form/Form.styled';

export const ContactsWrapper = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </>
  );
};

ContactsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
