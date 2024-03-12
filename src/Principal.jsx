import React from 'react';

const Principal = () => {
  return (
    <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: '0', padding: '0', boxSizing: 'border-box' }}>
      <div>
        <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2em', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <h1 style={{ margin: '0', fontSize: '2em', fontWeight: 'bold' }}>Mi Perfil</h1>
        </header>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#fff' }}>
          <div style={{ width: '600px', padding: '15px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ margin: '0', fontSize: '1.5em', fontWeight: 'bold' }}>Información Personal</h2>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Nombre Completo: [Tu Nombre]</p>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Semestre que Curso: [Tu Semestre]</p>

            <h2 style={{ margin: '20px 0 10px', fontSize: '1.5em', fontWeight: 'bold' }}>Hobbies</h2>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Mis Hobbies: [Tus Hobbies]</p>

            <h2 style={{ margin: '20px 0 10px', fontSize: '1.5em', fontWeight: 'bold' }}>Series Favoritas</h2>
            <div>
              <h3 style={{ margin: '0', fontSize: '1.2em', fontWeight: 'bold' }}>Breaking Bad</h3>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>
                Un profesor de química convertido en fabricante de metanfetaminas se asocia con un exalumno para asegurar el futuro financiero de su familia.
              </p>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Actores Relevantes: Bryan Cranston, Aaron Paul</p>
              <img
                src="https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg"
                alt="Breaking Bad"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
              />
            </div>
    
          </div>
        </div>
      </div>
    </body>
  );
};

export default Principal;
