import React from 'react';

const Principal = () => {
  return (
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2em', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <h1 style={{ margin: '0', fontSize: '2em', fontWeight: 'bold' }}>Mi Perfil</h1>
        </header>

        <section style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#fff' }}>
          <div style={{ width: '600px', padding: '15px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ margin: '0', fontSize: '1.5em', fontWeight: 'bold' }}>Información Personal</h2>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Nombre Completo: [Tu Nombre]</p>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Semestre que Curso: [Tu Semestre]</p>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Principal;

