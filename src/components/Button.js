import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            <React.Fragment>
                <input type="button" {...this.props } />
            </React.Fragment>
        );
    }
}

export default Button;