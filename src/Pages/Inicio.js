import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';

function Inicio() {
  return (
    <div className="App">
      {/* Header */}


       {/* cARRUSEL */}'
       <div><Carousel/></div>
       
      {/* Sección 1 */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Bienvenidos</h2>
              <p>Bienvenidos a Rincon del sabor

En el corazón de La paz, se encuentra nuestro encantador y acogedor restaurante, un santuario culinario donde la pasión por la buena comida se fusiona con la hospitalidad excepcional. En [Nombre del Restaurante], nos enorgullecemos de ofrecer una experiencia gastronómica única, llena de sabores innovadores y platillos tradicionales preparados con cuidado artesanal.

Nuestra filosofía se basa en la frescura y calidad de los ingredientes. Cada plato que servimos está cuidadosamente elaborado con productos locales y de temporada, creando así una sinfonía de sabores que deleitarán tu paladar. Desde los exquisitos entrantes hasta los postres tentadores, cada bocado es una celebración de la excelencia culinaria.

Pero más allá de la comida, en Rincon del sabor creemos en brindar una experiencia completa. Nuestro ambiente íntimo y acogedor está diseñado para crear momentos memorables para nuestros comensales. Nuestro equipo de profesionales apasionados y dedicados se esfuerza por ofrecer un servicio excepcional, asegurándonos de que tu visita sea inolvidable.

Ya sea que estés buscando una cena romántica, una comida familiar o simplemente una experiencia gastronómica auténtica, te invitamos a sumergirte en el encanto de Rincon del sabor. ¡Esperamos poder servirte y convertir tu visita en un deleite para todos los sentidos!

Este tipo de texto puede adaptarse según el estilo y la identidad del restaurante que desees presentar. Si hay detalles específicos sobre el restaurante que quieras resaltar, puedo ajustar el texto para reflejarlos mejor.</p>
            </div>
            <div className="col-md-6">
              <h2>Especialidades</h2>
              <p>
En el corazón de La paz, te invitamos a descubrir un universo de sabores auténticos y aromas irresistibles en nuestro amado "Rincón del Sabor". Nuestro restaurante es un oasis culinario donde las tradiciones se mezclan con la creatividad, ofreciendo una experiencia gastronómica única que deleita los sentidos y reconforta el alma.

En nuestro menú, encontrarás un desfile de especialidades cuidadosamente elaboradas, cada una representando un viaje a través de los sabores más exquisitos. Desde los platos más clásicos hasta creaciones innovadoras, cada bocado es una celebración de la cocina artesanal y la pasión por los ingredientes de calidad.

Nuestra especialidad principal radica en las fusiones creativas de la cocina local con influencias internacionales. Desde nuestros jugosos cortes de carne sazonados a la perfección hasta los pescados frescos capturados del día, cada plato es una obra maestra que refleja nuestro compromiso con la frescura y la excelencia culinaria.

Además, no puedes perderte nuestros exquisitos postres artesanales, que son la culminación perfecta de tu experiencia gastronómica. Desde suaves mousses hasta tentadoras tartas, cada dulce está elaborado con esmero para satisfacer tu paladar y endulzar tu día.

En el "Rincón del Sabor", nuestra misión es llevarte en un viaje sensorial a través de los sabores más auténticos y las combinaciones más intrigantes. Te invitamos a sumergirte en nuestra cocina única y descubrir la esencia misma del placer culinario.

Este texto se enfoca en resaltar la variedad y calidad de las especialidades que ofrece el restaurante "Rincón del Sabor". Si tienes algún plato específico o detalle que te gustaría incluir, házmelo saber para ajustar el texto de acuerdo a tus preferencias.</p>
              <img src="./img/3.jpg" alt="Third slide" style={{ maxHeight: '250px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Inicio;
