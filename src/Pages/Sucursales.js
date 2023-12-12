
const Sucursales = () => {
    const sucursales = [
      {
        zona: 'Centro',
        direccion: 'Calle Principal #123',
        imagenes: [
          'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/19/16871657945574.jpg',

        ],
      },
      {
        zona: 'Norte',
        direccion: 'Avenida Norte #456',
        imagenes: [
          'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/10/honest-greens-2839607.jpg?tf=3840x',

        ],
      },
      // Agregar más sucursales con sus respectivas direcciones e imágenes
    ];
  
    return (
      <div>
        <h2>Sucursales</h2>
        <p>Descubre nuestras sucursales en diferentes zonas</p>
  
        <div>
          {sucursales.map((sucursal, index) => (
            <div key={index}>
              <h3>{sucursal.zona}</h3>
              <p>Dirección: {sucursal.direccion}</p>
              <div style={{ display: 'flex' }}>
                {sucursal.imagenes.map((imagen, idx) => (
                  <img
                    key={idx}
                    src={imagen}
                    alt={`${sucursal.zona} - Imagen ${idx + 1}`}
                    style={{ width: '500px', height: '300px', marginRight: '10px' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sucursales;