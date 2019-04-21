import React, { Component } from 'react';

class Textbox extends Component {
    render(){
        return(
            <React.Fragment>
                <input type="text" {...this.props } />
            </React.Fragment>
        );
    }
}

export default Textbox;