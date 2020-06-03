// preset quantities, all expressed in terms of meters.  state should be the quantity written in the form [number]*m^[meterExponent]

let presetsSet = [
  {
    name: "Hubble's Constant (Planck 2018)",
    latex: 'H_{0}',
    state: {
      number: 7.28 * 10 ** -27,
      meterExponent: -1,
    }
  },
  {
    name: 'Bohr radius',
    latex: 'a_{0}',
    state: {
      number: 5.29 * 10 ** (-11),
      meterExponent: 1,
    }
  },
  {
    name: 'Electron mass',
    latex: 'm_{e}',
    state: {
      number: 2.59 * 10 ** 12,
      meterExponent: -1,
    }
  },
  {
    name: 'Proton mass',
    latex: 'm_{p}',
    state: {
      number: 4.75 * 10 ** 15,
      meterExponent: -1,
    }
  },
  {
    name: 'Higgs mass',
    latex: 'm_{H}',
    state: {
      number: 6.33 * 10 ** 17,
      meterExponent: -1,
    }
  },
  {
    name: 'Reduced Planck Mass',
    latex: 'M_{\\rm pl}',
    state: {
      number: 1.28 * 10 ** 34,
      meterExponent: -1,
    }
  },
  {
    name: 'Solar Mass',
    latex: 'M_{\\odot}',
    state: {
      number: 5.89 * 10 ** 72,
      meterExponent: -1,
    }
  },
  {
    name: 'Fine structure constant',
    latex: '\\alpha',
    state: {
      number: 1 / 137,
      meterExponent: 0,
    }
  }
];


export default presetsSet;