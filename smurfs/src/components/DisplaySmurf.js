import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurf, giveSmurf} from '../actions';

const DisplaySmurf = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    useEffect(() => {
        props.getSmurf()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.giveSmurf({
            name: name,
            age: age,
            height: height,
        });
        setName('')
        setAge('')
        setHeight('')
    }

    const handleName = e => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleAge = e => {
        e.preventDefault();
        setAge(e.target.value)
    }

    const handleHeight = e => {
        e.preventDefault();
        setHeight(e.target.value)
    }

    return (
        <div>
            <h1>Smurfs</h1>
            <form>
                Name: <input type='text' name='name' value={name} onChange={handleName}/>
                Age: <input type='text' name='age' value={age} onChange={handleAge}/>
                Height: <input type='text' name='height' value={height} onChange={handleHeight}/>
                <button onClick={handleSubmit}>Add Smurfs</button>
            </form>
                {props.smurf.map(item => (
                    <div key={item.id}>
                     <h3>{item.name}</h3>
                        <p>Age: {item.age}</p>
                        <p>Height: {item.height}</p>
                    </div>
                ))}
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