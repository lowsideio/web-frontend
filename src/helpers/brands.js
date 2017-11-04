
const basePath = '/static/brands';

const logo = (brand) => {
  switch (brand) {
    case 'APRILIA': return `${basePath}/aprilia.png`;
    case 'BENELLI': return `${basePath}/benneli.png`;
    case 'BMW': return `${basePath}/bmw.png`;
    case 'DERBI': return `${basePath}/derbi.png`;
    case 'DUCATI': return `${basePath}/ducati.png`;
    case 'GASGAS': return `${basePath}/gasgas.png`;
    case 'GILERA': return `${basePath}/gilera.png`;
    case 'HARLEY-DAVIDSON': return `${basePath}/harley-davidson.png`;
    case 'HONDA': return `${basePath}/honda.png`;
    case 'HUSQVARNA': return `${basePath}/husqvarna.png`;
    case 'HYOSUNG': return `${basePath}/hyosung.png`;
    case 'KAWASAKI': return `${basePath}/kawasaki.png`;
    case 'KTM': return `${basePath}/ktm.png`;
    case 'KYMCO': return `${basePath}/kymco.png`;
    case 'MOTO-GUZZI': return `${basePath}/moto-guzzi.svg`;
    case 'MV-AGUSTA': return `${basePath}/mv-agusta.svg`;
    case 'PEUGEOT': return `${basePath}/peugeot.png`;
    case 'PIAGGO': return `${basePath}/piaggo.png`;
    case 'SHERCO': return `${basePath}/sherco.png`;
    case 'SUZUKI': return `${basePath}/suzuki.png`;
    case 'TRIUMPH': return `${basePath}/triumph.png`;
    case 'VESPA': return `${basePath}/vespa.png`;
    case 'YAMAHA': return `${basePath}/yamaha.png`;
    case 'ZERO-ENGINEERING': return `${basePath}/zero-engineering.png`;
    default: return null;
  }
};

export default {
  logo,
};
