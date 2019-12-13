import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';

export const POST_SMURF = 'POST_SMURF';



export const getSmurf = () => dispatch => {
    axios
    .get("http://127.0.0.1:3333/smurfs")
    .then(res => {
        dispatch({ type: FETCH_SMURFS, payload: res.data});
    })
    .catch(err => {
        console.log(err)
    });
}

export const giveSmurf = values => dispatch => {
    dispatch({ type: POST_SMURF, payload: values});
    axios
    .post("http://127.0.0.1:3333/smurfs", values)
    .then(res => {
        console.log(res)
    })
}