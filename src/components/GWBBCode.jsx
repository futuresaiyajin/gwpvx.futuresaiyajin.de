import React, { Component } from 'react';

import './GWBBCode.scss';

export default class GWBBCode extends Component{
    render() {
        return (
            <div className='gwbbcode'>
                [build={this.props.gwTemplateCode}]
            </div>
        )
    }
}