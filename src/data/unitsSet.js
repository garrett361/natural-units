// set of units, all re-expressed in terms of a meters value and a power
// meterValue and meterExponent determined by writing 1m=[meterValue]*[units]^[meterExponent]
// Roughly grouped by unit type (energy, length, volume, etc) in increasing size order.  Could probably improve this
let unitsSet = [

  {
    units: 'meV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 3,
  },
  {
    units: 'eV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 6,
  },
  {
    units: 'keV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 9,
  },
  {
    units: 'MeV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 12,
  },
  {
    units: 'GeV',
    meterExponent: -1,
    meterValue: 5.06 * 10 ** 15,
  },
  {
    units: 'gauss',
    meterExponent: -1 / 2,
    meterValue: 389777.816,
  },
  {
    units: 'tesla',
    meterExponent: -1 / 2,
    meterValue: 38977781.6,
  },
  {
    units: 'erg',
    meterExponent: -1,
    meterValue: 3.16 * 10 ** 18,
  },
  {
    units: 'J',
    meterExponent: -1,
    meterValue: 3.16 * 10 ** 25,
  },
  {
    units: 'K',
    meterExponent: -1,
    meterValue: 436,
  },
  {
    units: 'Å',
    meterExponent: 1,
    meterValue: 10 ** 10,
  },
  {
    units: 'nm',
    meterExponent: 1,
    meterValue: 10 ** 9,
  },
  {
    units: 'cm',
    meterExponent: 1,
    meterValue: 100,
  },
  {
    units: 'ft',
    meterExponent: 1,
    meterValue: 3.28,
  },
  {
    units: 'm',
    meterExponent: 1,
    meterValue: 1,
  },
  {
    units: 'km',
    meterExponent: 1,
    meterValue: 1 / 1000,
  },
  {
    units: 'mi',
    meterExponent: 1,
    meterValue: .000621371192,
  },
  {
    units: 'au',
    meterExponent: 1,
    meterValue: 6.68 * 10 ** (-12),
  },
  {
    units: 'ly',
    meterExponent: 1,
    meterValue: 1 / (9.46 * 10 ** 15),
  },
  {
    units: 'pc',
    meterExponent: 1,
    meterValue: 1 / (3.086 * 10 ** 16),
  },
  {
    units: 'Mpc',
    meterExponent: 1,
    meterValue: 1 / (3.086 * 10 ** 22),
  },
  {
    units: 'b',
    meterExponent: .5,
    meterValue: 1 * 10 ** 14,
  },
  {
    units: 's',
    meterExponent: 1,
    meterValue: 3.33 * 10 ** (-9),
  },
  {
    units: 'days',
    meterExponent: 1,
    meterValue: 3.86 * 10 ** (-14),
  },
  {
    units: 'years',
    meterExponent: 1,
    meterValue: 1.06 * 10 ** (-16),
  },
  {
    units: 'Hz',
    meterExponent: -1,
    meterValue: 3.3356 * 10 ** (-9),
  },
  {
    units: 'MHz',
    meterExponent: -1,
    meterValue: 0.00333564095,
  },
  {
    units: 'GHz',
    meterExponent: -1,
    meterValue: 3.33564095,
  },
  {
    units: 'g',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-40)),
  },
  {
    units: 'lb',
    meterExponent: -1,
    meterValue: 1.29 * 10 ** 42,
  },
  {
    units: 'kg',
    meterExponent: -1,
    meterValue: 1 / (3.52 * 10 ** (-43)),
  },
  {
    units: 'ton',
    meterExponent: -1,
    meterValue: 2.58 * 10 ** 45,
  },
  {
    units: 'tsp',
    meterExponent: 1 / 3,
    meterValue: 58.7601231,
  },
  {
    units: 'Tbsp',
    meterExponent: 1 / 3,
    meterValue: 40.7419938,
  },
  {
    units: 'fl. oz.',
    meterExponent: 1 / 3,
    meterValue: 32.3369419,
  },
  {
    units: 'cups',
    meterExponent: 1 / 3,
    meterValue: 16.168471,
  },
  {
    units: 'pints',
    meterExponent: 1 / 3,
    meterValue: 12.8329239,
  },
  {
    units: 'quarts',
    meterExponent: 1 / 3,
    meterValue: 10.1854985,
  },
  {
    units: 'liters',
    meterExponent: 1 / 3,
    meterValue: 10,
  },
  {
    units: 'gallons',
    meterExponent: 1 / 3,
    meterValue: 6.41646195,
  },
  {
    units: 'GN',
    meterExponent: .5,
    meterValue: 6.41 * 10 ** 34,
  }
];

export default unitsSet;