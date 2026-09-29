const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts local (050 123 45 67) and international (+994 50 123 45 67) formats.
const PHONE_PATTERN = /^(\+994|0)?\s?\(?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export const CITIES = ['Baku', 'Ganja', 'Sumgait', 'Mingachevir', 'Lankaran', 'Shaki', 'Other'];

export default function validateCheckout(values) {
  const errors = {};
  const name = values.name.trim();

  if (!name) errors.name = 'Please enter your full name.';
  else if (name.length < 3 || !name.includes(' ')) errors.name = 'Enter your first and last name.';

  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address.';

  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = 'Use a valid number, e.g. +994 50 123 45 67.';

  if (!CITIES.includes(values.city)) errors.city = 'Please choose your city.';

  if (!values.address.trim()) errors.address = 'Please enter your delivery address.';
  else if (values.address.trim().length < 6) errors.address = 'Please enter a more detailed address.';

  return errors;
}
