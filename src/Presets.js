import React, { Component } from 'react'

// Ramda
import * as R from 'ramda';



let initialState = {
    meterValue: null,
    presetExponent: 1,
    presetName: null,
};

class Presets extends Component {

    state = initialState;

    // event handlers
    handlePresetChange = event => {
        let { value } = event.target;
        // find which  unit was selected
        let { presetsSet } = this.props;
        let presetsIndex = R.findIndex(R.propEq('name', value))(presetsSet);
        if (presetsIndex !== -1) {
            this.setState(
                presetsSet[presetsIndex].state
            );
            this.setState(
                { presetName: value }
            );
        }
    }

    handleChange = event => {
        let { name, value } = event.target
        // The [ ] brackets here are the setState synatx
        this.setState({
            [name]: value,
        })
    }




    render() {

        let { number, presetExponent, presetName } = this.state;
        let { handleSubmit, presetsSet } = this.props;


        // preset options
        let presetsFill = R.map((x, i) => { return (<option key={x.name} name={i}>{x.name}</option>) }, presetsSet);




        // raising presets to a power, using that all units are in terms of meters
        let presetExponentiator = (obj, exponent) => {

            let output = R.clone(obj);
            output.number = Math.pow(obj.number, exponent);
            output.meterValue = 1;
            output.units = 'm';
            output.unitsExponent = exponent;
            output.overallExponent = 1;
            let presetsIndex = R.findIndex(R.propEq('name', this.state.presetName))(this.props.presetsSet);
            output.latex = presetsSet[presetsIndex].latex;
            return (output)

        }


        return (

            <div>
                <form>
                    <label>Presets </label>
                    <select
                        name="unitsPreset"
                        id="unitsPreset"
                        value={presetName || ''}
                        onChange={this.handlePresetChange}
                    >
                        <option value=""></option>
                        {presetsFill}
                    </select>

                    <label>Exponent</label>
                    <input
                        type="number"
                        name="presetExponent"
                        id="presetExponent"
                        value={presetExponent || ''}
                        onChange={this.handleChange}
                    />
                </form>

                <input
                    type="button"
                    value="Submit"
                    onClick={() => {
                        if (!number) {
                            alert('Please choose a quantity');
                            this.setState(initialState);
                        } else if (Number(presetExponent)===0) {
                            alert('Please choose a non-zero exponent');
                            this.setState(initialState);
                        }
                        else {
                            handleSubmit(
                                presetExponentiator(this.state, presetExponent)
                            );
                            this.setState(initialState);
                        }
                    }
                    }
                />

            </div>
        )
    }

}


export default Presets