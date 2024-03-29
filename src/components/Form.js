import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                value={props.value}
                onChange={props.change}>
            </input>

            <button>Wyszukaj miasto</button>
        </form>
    );
};
export default Form;