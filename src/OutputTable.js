import React from 'react'

// Ramda
import * as R from 'ramda';

// Latex
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

// Create a fuction to separate exponential notation numbers into a prefactor and an exponent
let exponentSeparate = (x) => {
  let numx = Number(x).toExponential();
  let regexpDigit = /[e]/;
  let result = {};
  result.number = numx.slice(0, regexpDigit.exec(numx).index);
  result.numberExponent = numx.slice(regexpDigit.exec(numx).index + 1, numx.length);
  return ([Number(result.number).toPrecision(3), Number(result.numberExponent)]);
};

// Standardized latex output
let LatexOutput = (props) => {
  let { input } = props;
  if (input.latex) {
    if (Number(input.unitsExponent) !== 1) {
      return (
        <InlineMath>
          {input.latex + '^{' + input.unitsExponent + '}'}
        </InlineMath>
      );
    } else {
      return (
        <InlineMath>
          {input.latex}
        </InlineMath>
      );
    };
  } else {
    let numbersplit = exponentSeparate(input.number);
    let tenpower = '';
    if (numbersplit[1]) {
      tenpower = '\\times 10^{' + numbersplit[1] + '}';
    }
    let unitfactor = '';
    if (Number(input.unitsExponent)) {
      if (Number(input.unitsExponent) !== 1) {
        unitfactor = '\\  \\mathrm{' + input.units + '} ^{' + input.unitsExponent + '}';
      } else {
        unitfactor = '\\  \\mathrm{' + input.units +'}';
      };
    }

    return (
      <InlineMath>
        {numbersplit[0] + tenpower + unitfactor}
      </InlineMath>
    );
  };
};


// Standardized factored latex output

let LatexOutputFactored = (props) => {
  let { input } = props;
  let numbersplit = exponentSeparate(input.number);
  let tenpower = '';
  if (Number(numbersplit[1])) {
    tenpower = '\\times 10^{' + numbersplit[1] + '}';
  }
  let unitfactor = '';
  if (Number(input.unitsExponent)) {
    unitfactor = '\\  \\mathrm{' + input.units + '}';
  }

  return (
    <InlineMath>
      {' \\left (' + numbersplit[0] + tenpower + unitfactor + ' \\right) ^{' + input.unitsExponent + '}'}
    </InlineMath>
  );
};


// Multiplying together all meters values input array and turning into a single number, exponent pair
let meterValues = (array) => {
  let output = {};
  output.number = R.reduce((a, b) => { return ((Number(b.number) * Math.pow(b.meterValue, -b.meterExponent * b.unitsExponent)) * a) }, 1, array).toExponential()
  output.meterExponent = R.reduce((a, b) => { return (b.unitsExponent * b.meterExponent + a) }, 0, array);
  return (
    output
  );
};



// Converting output to desired units
let unitConvertor = (input, outputUnit, unitsSet) => {
  // find which  unit was selected
  let unitIndex = R.findIndex(R.propEq('units', outputUnit))(unitsSet);
  let finalUnit = unitsSet[unitIndex];
  let output = {};
  output.number = ((meterValues(input).number) * Math.pow(finalUnit.meterValue, meterValues(input).meterExponent)).toExponential();
  output.unitsExponent = finalUnit.meterExponent * meterValues(input).meterExponent;
  output.units = outputUnit;
  return (output);
};
// Same as above, but factorized
let unitConvertorFactored = (input, outputUnit, unitsSet) => {
  // convert input as above
  let convertedInput = unitConvertor(input, outputUnit, unitsSet)
  let output = {};
  if (convertedInput.unitsExponent) {
    output.number = Math.pow(convertedInput.number, 1 / convertedInput.unitsExponent).toExponential();
    output.unitsExponent = convertedInput.unitsExponent;
    output.units = outputUnit;
    return (
      output
    );
  } else {
    return (output)
  };
};

let OutputTable = (props) => {

  let { input, unitsSet, handleOutputUnitChange, outputUnit, handleReset } = props;

  let outputInFinalUnits = unitConvertor(input, outputUnit, unitsSet);
  let outputInFinalUnitsFactored = unitConvertorFactored(input, outputUnit, unitsSet);

  // Units options
  let unitsFill = R.map((x) => { return (<option key={x.units} value={x.units}>{x.units}</option>) }, unitsSet);


  // Each input value contains (number, numberExponent, units, unitsExponent,meterExponent,meterValue) properties


  // Latexed list of all inputs
  let inputFill = input.map((x, i) => {
    return (
      <li key={i}>
        <LatexOutput
          input={x}
        />
      </li>
    )
  });


  return (
    <div>
      <form>
        <label>Output Unit </label>
        <select
          name="outputUnit"
          id="outputUnit"
          value={outputUnit ? outputUnit : undefined}
          onChange={handleOutputUnitChange}
        >
          {unitsFill}
        </select>
      </form>


      {input[0]
        &&
        <div>
          <h4>
            Input Factors
           </h4>
          <ul className={"no-li-marks"}>
            {inputFill}
          </ul>

          <h4>
            Net Result
           </h4>
          <ul className={"no-li-marks"}>
            <li>
              <LatexOutput
                input={outputInFinalUnits}
              />
              {outputInFinalUnits.unitsExponent !== 1 && outputInFinalUnits.unitsExponent !== 0
                &&
                <span>
                  <InlineMath>
                    =
              </InlineMath>
                  <LatexOutputFactored
                    input={outputInFinalUnitsFactored}
                  />
                </span>
              }
            </li>
          </ul>

          <input
            type="button"
            value="Reset"
            onClick={() => {
              handleReset()
            }
            }
          />
        </div>
      }
    </div>
  )
}

export default OutputTable