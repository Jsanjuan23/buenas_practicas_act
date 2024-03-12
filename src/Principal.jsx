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
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Nombre Completo: Jesus Sanjuan</p>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Semestre que Curso: Décimo Semestre</p>

            <h2 style={{ margin: '20px 0 10px', fontSize: '1.5em', fontWeight: 'bold' }}>Hobbies</h2>
            <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Mis Hobbies: Viajar, Leer, Jugar a videojuegos</p>

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
            
            <div>
              <h3 style={{ margin: '20px 0 10px', fontSize: '1.2em', fontWeight: 'bold' }}>Stranger Things</h3>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>
                Un grupo de niños en un pequeño pueblo descubre fenómenos paranormales y criaturas sobrenaturales mientras buscan a su amigo desaparecido.
              </p>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Actores Relevantes: Millie Bobby Brown, Finn Wolfhard</p>
              <img
                src="https://www.fayerwayer.com/resizer/gZmzsRN9PG6JSk_9vGD97jFKZW8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/SZNR4IXRVBG6DIN55H5KPYNU2Q.webp"
                alt="Stranger Things"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
              />
            </div>

            <div>
              <h3 style={{ margin: '20px 0 10px', fontSize: '1.2em', fontWeight: 'bold' }}>The Mandalorian</h3>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>
                En el vasto universo de Star Wars, un cazarrecompensas solitario se embarca en misiones épicas mientras cuida a un misterioso niño llamado Grogu.
              </p>
              <p style={{ margin: '0', fontSize: '1em', fontStyle: 'italic' }}>Actor Principal: Pedro Pascal</p>
              <img
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/mandalorian-2485773.jpg?tf=1200x"
                alt="The Mandalorian"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
              />
            </div>
            {/* Puedes agregar más series con imágenes en los siguientes commits */}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Principal;
