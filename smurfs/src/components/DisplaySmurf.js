import React from 'react';
import {connect} from 'react-redux';

import {getSmurf, giveSmurf} from '../actions';

const DisplaySmurf = props => {

    return (
        <div>
            <h1>Smurfs</h1>
            <form>
                Name: <input type='text' name='name' />
                Age: <input type='text' name='age' />
                Height: <input type='text' name='height' />
            </form>
            <button onClick={props.giveSmurf}>Add Smurfs</button>
            <button onClick={props.getSmurf}>Get Smurfs</button>
            {props.isFetching && (<p>...Loading Smurfs...</p>)}
            {props.smurf &&
            <div>
                {props.smurf.map(item => (
                    <div key={item.id}>
                     <h3>{item.name}</h3>
                        <p>Age: {item.age}</p>
                        <p>Height: {item.height}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state)
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurf, giveSmurf })(DisplaySmurf)