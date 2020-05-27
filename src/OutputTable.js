import React from 'react'

// Ramda
import * as R from 'ramda';

// Latex
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// Create a fuction to separate exponential notation numbers into a prefactor and an exponent
let exponentSeparate = (x) => {
  let regexpDigit = /[e]/;
  let result = {};
  result.number = x.slice(0, regexpDigit.exec(x).index);
  result.numberExponent = x.slice(regexpDigit.exec(x).index + 1, x.length);
  return ([Number(result.number).toPrecision(3), Number(result.numberExponent)]);
};

// Standardized latex output
let LatexOutput = (props) => {
  let { number, numberExponent, units, unitsExponent } = props;
  if (unitsExponent !== 0) {
    return (
      <InlineMath>
        {number + '\\times 10^{' + numberExponent + '} \\  \\mathrm{' + units + '} ^{' + unitsExponent + '}'}
      </InlineMath>
    );
  } else {
    return (
      <InlineMath>
        {number + '\\times 10^{' + numberExponent + '} '}
      </InlineMath>
    );
  }
};

// Standardized factored latex output

let LatexOutputFactored = (props) => {
  let { number, numberExponent, units, unitsExponent } = props;
  return (
    <InlineMath>
      {' \\left (' + number + '\\times 10^{' + numberExponent + '} \\  \\mathrm{' + units + '} \\right) ^{' + unitsExponent + '}'}
    </InlineMath>
  );
};

// Multiplying together all meters values input array and turning into a single number, exponent pair
let meterValues = (array) => {
  let output = {};
  output.numberTotal = R.reduce((a, b) => { return ((b.number * (10 ** (b.numberExponent)) * Math.pow(b.meterValue, b.meterExponent)) * a) }, 1, array).toExponential()
  output.number = exponentSeparate(output.numberTotal)[0];
  output.numberExponent = exponentSeparate(output.numberTotal)[1];
  output.meterExponent = R.reduce((a, b) => { return (b.unitsExponent * b.meterExponent + a) }, 0, array);
  return (
    output
  );
};
// Same as above, but factorizing
let meterValuesFactored = (array) => {
  let output = {};
  output.numberTotal = R.reduce((a, b) => { return ((b.number * (10 ** (b.numberExponent)) * Math.pow(b.meterValue, b.meterExponent)) * a) }, 1, array).toExponential()
  output.meterExponent = R.reduce((a, b) => { return (b.unitsExponent * b.meterExponent + a) }, 0, array);
  if (output.meterExponent) {
    output.root = Math.pow(output.numberTotal, 1 / output.meterExponent).toExponential();
    output.rootNumber = exponentSeparate(output.root)[0];
    output.rootNumberExponent = exponentSeparate(output.root)[1];
    return (
      output
    );
  } else {
    return (output)
  };
};

let OutputTable = (props) => {

  let { input, unitsSet } = props;

  // Each input value contains (number, numberExponent, units, unitsExponent,meterExponent,meterValue) properties


  // Latexed list of all inputs
  let inputFill = input.map((x, i) => {
    return (
      <li key={i}>
        <LatexOutput
          number={x.number}
          numberExponent={x.numberExponent}
          units={x.units}
          unitsExponent={x.unitsExponent} />
      </li>
    )
  });

  return (
    <div>
      {input[0]
        &&
        <div>
          <h3>
            Input
           </h3>
          <ul>
            {inputFill}
          </ul>
          <h3>
            Output
           </h3>
          <LatexOutput
            number={meterValues(input).number}
            numberExponent={meterValues(input).numberExponent}
            units={'m'}
            unitsExponent={meterValues(input).meterExponent}
          />

          {meterValuesFactored(input).meterExponent !== 0
            &&
            <span>
              <InlineMath>
                =
              </InlineMath>
              <LatexOutputFactored
                number={meterValuesFactored(input).rootNumber}
                numberExponent={meterValuesFactored(input).rootNumberExponent}
                units={'m'}
                unitsExponent={meterValuesFactored(input).meterExponent}
              />
            </span>
          }

        </div>
      }
    </div>
  )
}

export default OutputTable