
const basePath = 'static/categories';

const illustration = (category) => {
  switch (category) {
    case 'CRUISER': return `${basePath}/cruiser.svg`;
    case 'DUAL-SPORT': return `${basePath}/dual-sport.svg`;
    case 'ROADSTER': return `${basePath}/roadster.svg`;
    case 'SCOOTER': return `${basePath}/scooter.svg`;
    case 'SPORT-TOURING': return `${basePath}/sport-touring.svg`;
    case 'SPORT': return `${basePath}/sport.svg`;
    case 'SUPERMOTO': return `${basePath}/supermoto.svg`;
    case 'TOURING': return `${basePath}/touring.svg`;
    case 'CROSS': return `${basePath}/cross.svg`;

    case 'ENDURO': return `${basePath}/enduro.svg`; // TODO svg
    case 'NAKED': return `${basePath}/naked.svg`; // TODO svg
    case 'UNKNOWN': return `${basePath}/unknown.svg`; // TODO svg
    case 'MINI': return `${basePath}/mini.svg`; // TODO svg
    case 'TRIAL': return `${basePath}/trial.svg`; // TODO svg
    case 'PROTO': return `${basePath}/proto.svg`; // TODO svg

    default: return null;
  }
};

export default {
  illustration,
};
