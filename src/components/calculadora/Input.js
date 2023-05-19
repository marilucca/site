import React from 'react';

export default function Input({ text, sectionText, htmlFor, type = 'number', value, onChange }) {
  return (
    <label className="input-container" htmlFor={htmlFor}>
      {sectionText ? <p className="input-section-text">{sectionText}</p> : null}
      <p>{text}</p>
      <input type={type} id={htmlFor} name={htmlFor} value={value} onChange={onChange} />
    </label>
  );
}
