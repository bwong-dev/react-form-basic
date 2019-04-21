import React, { Component } from 'react';

class Select extends Component {
    render(){
        return(
            <select id={ this.props.id } name={ this.props.name } className={ this.props.className } value={ this.props.value } onChange={ this.props.onChange }>
                { this.props.options.map( ( option ) => (
                    (<option key={ option.value } value={ option.value } disabled={ ( option.disabled )? 'disabled': '' } >
                        { option.displayValue }
                    </option>)
                ) ) }
            </select>
        );
    }
}

export default Select;