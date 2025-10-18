import * as React from 'react';

export function EmailTemplate({ name, message, from }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
      <h1 style={{ color: '#0D1D59' }}>Nueva solicitud de contacto</h1>
      <p><strong>De:</strong> {name}</p>
      <p><strong>Correo:</strong> {from}</p> 
      <p><strong>Mensaje:</strong></p>
      <blockquote style={{ fontStyle: 'italic', color: '#555', borderLeft: '4px solid #0D1D59', paddingLeft: '10px' }}>
        {message}
      </blockquote>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      <p style={{ fontSize: '0.9rem', color: '#666' }}>Este correo fue enviado automáticamente desde el formulario de contacto de TodoConectado.</p>
    </div>
  );
}
