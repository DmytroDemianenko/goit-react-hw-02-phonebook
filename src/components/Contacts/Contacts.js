import PropTypes from 'prop-types';
const Contacts = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => (
        <li>{contact}</li>
      ))}
    </>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.array,
};
export default Contacts;
