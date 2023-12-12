

const Ingredientes= ()=>{
    const recetas = [
        {
          
          id: 1,
          nombre: 'Tarta de Manzana',
          ingredientes: ['Manzanas', 'Harina', 'Azúcar', 'Canela', 'Mantequilla'],
        },
        {
          id: 2,
          nombre: 'Pasta Alfredo',
          ingredientes: ['Pasta', 'Crema', 'Queso Parmesano', 'Mantequilla', 'Ajo'],
        },
        {
          id: 3,
          nombre: 'Ensalada César',
          ingredientes: ['Lechuga', 'Pollo', 'Queso Parmesano', 'Pan tostado', 'Aderezo César'],
        },
      ];
    
      return (
        <div>
          <h2>Recetas</h2>
          {recetas.map((receta) => (
            <div key={receta.id}>
              <h3>{receta.nombre}</h3>
              <ul>
                {receta.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
              <img
        src="https://www.pequerecetas.com/wp-content/uploads/2021/03/comidas-rapidas.jpg"
        alt="Imagen del Restaurante"
        style={{ maxWidth: '50%', height: 'auto' }}
      />
            </div>
          ))}
        </div>
      );
    };
export default Ingredientes