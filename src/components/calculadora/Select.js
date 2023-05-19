import React from 'react';

export default function Select({ text, sectionText, htmlFor, value, onChange, children }) {
  return (
    <label className="input-container" htmlFor={htmlFor}>
      {sectionText ? <p className="input-section-text">{sectionText}</p> : null}
      <p>{text}</p>
      <select id={htmlFor} name={htmlFor} value={value} onChange={onChange}>
        {children}
      </select>
    </label>
  );
}
