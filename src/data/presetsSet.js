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
    name: 'Up quark mass',
    latex: 'm_{u}',
    state: {
      number: 9.61 * 10 ** 12,
      meterExponent: -1,
    }
  },
  {
    name: 'Down quark mass mass',
    latex: 'm_{d}',
    state: {
      number: 2.23 * 10 ** 13,
      meterExponent: -1,
    }
  },
  {
    name: 'Strange quark mass',
    latex: 'm_{s}',
    state: {
      number: 4.40 * 10 ** 14,
      meterExponent: -1,
    }
  },
  {
    name: 'Muon mass',
    latex: 'm_{\\mu}',
    state: {
      number: 5.35 * 10 ** 14,
      meterExponent: -1,
    }
  },
  {
    name: 'Charm quark mass',
    latex: 'm_{c}',
    state: {
      number: 6.68 * 10 ** 15,
      meterExponent: -1,
    }
  },
  {
    name: 'Tau mass',
    latex: 'm_{\\tau}',
    state: {
      number: 9.01 * 10 ** 15,
      meterExponent: -1,
    }
  },
  {
    name: 'Bottom quark mass',
    latex: 'm_{b}',
    state: {
      number: 2.15 * 10 ** 16,
      meterExponent: -1,
    }
  },
  {
    name: 'W boson mass',
    latex: 'm_{W}',
    state: {
      number: 4.07 * 10 ** 17,
      meterExponent: -1,
    }
  },
  {
    name: 'Z boson mass',
    latex: 'm_{Z}',
    state: {
      number: 4.61 * 10 ** 17,
      meterExponent: -1,
    }
  },
  {
    name: 'Top quark mass',
    latex: 'm_{t}',
    state: {
      number: 8.74 * 10 ** 17,
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
    name: 'Earth Mass',
    latex: 'M_{\\oplus}',
    state: {
      number: 1.70 * 10 ** 67,
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