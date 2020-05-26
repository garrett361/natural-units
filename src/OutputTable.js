import React from 'react'

// Ramda
import * as R from 'ramda';

// Latex
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


let OutputTable = (props) => {

  let { input, unitsSet } = props;

  // Each input value contains (number, numberExponent, units, unitsExponent,meterExponent,meterValue) properties


  // Latexed list of all inputs
  let inputFill = input.map((x, i) => {
    return (
      <li key={i}>
        <InlineMath>
          {x.number + '\\times 10^{' + x.numberExponent + '} \\  \\mathrm{' + x.units + '} ^{' + x.unitsExponent + '}'}
        </InlineMath>
      </li>
    )
  });

  // Combine all inputs into a single meters value
  // need some RegExp code to separate out exponential notation
  let regexpDigit = /[e]/;
  let output = {};
  if (input[0]) {
    output.numberTotal = R.reduce((a, b) => { return ((b.number * (10 ** (b.numberExponent)) * Math.pow(b.meterValue, b.meterExponent)) * a) }, 1, input).toExponential()
    console.log(output.numberTotal);
    output.number = output.numberTotal.slice(0, regexpDigit.exec(output.numberTotal).index);
    output.numberExponent = output.numberTotal.slice(regexpDigit.exec(output.numberTotal).index + 1, output.numberTotal.length);
    // output.numberTotalExponent = R.reduce(R.add, 0, R.pluck('numberExponent', input));
    output.meterExponent = R.reduce((a, b) => { return (b.unitsExponent * b.meterExponent + a) }, 0, input)
    output.root = Math.pow(output.numberTotal, 1 / output.meterExponent).toExponential();
    output.rootNumber=output.root.slice(0, regexpDigit.exec(output.root).index);
    output.rootNumberExponent=output.root.slice(regexpDigit.exec(output.root).index + 1, output.root.length);
  };
 

  return (
    <div>
      <ul>
        {inputFill}
      </ul>
      <h1>\(\int\)</h1>
      <h2>{input[0] && output.value}</h2>
      {input[0]
        &&
        <div>
          <InlineMath>
            {Math.pow(output.number, 1).toPrecision(3) + '\\times 10^{' + output.numberExponent + '} \\mathrm{m}' + '^{' + output.meterExponent + '}=' + '(' + Math.pow(output.rootNumber,1).toPrecision(3) + '\\times 10^{' + output.rootNumberExponent + '} \\mathrm{m})^{' + output.meterExponent + '}'}
          </InlineMath>
        </div>
      }
    </div>
  )
}

export default OutputTable