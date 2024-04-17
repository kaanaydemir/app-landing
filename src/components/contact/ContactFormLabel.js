import React from 'react';

function ContactFormLabel({title, name}) {
  return (
    <label htmlFor={name} className="block mb-2 text-sm font-bold text-white dark:text-white">{title}</label>
  );
}

export default ContactFormLabel;