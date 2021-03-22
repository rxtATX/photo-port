import { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      const isValid = validateEmail(target.value);
      
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(target.name)} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ 
        ...formState, 
        [target.name]: target.value 
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        {/* submit button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;