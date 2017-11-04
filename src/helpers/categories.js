
const basePath = '/static/categories';

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

    case 'ENDURO': return `${basePath}/enduro.svg`;
    case 'NAKED': return `${basePath}/naked.svg`;
    case 'TRIAL': return `${basePath}/trial.svg`;
    case 'PROTO': return `${basePath}/proto.svg`;

    case 'MINI': return `${basePath}/mini.svg`;

    case 'UNKNOWN': return '/static/icons/unknown.png';

    default: return null;
  }
};

export default {
  illustration,
};
