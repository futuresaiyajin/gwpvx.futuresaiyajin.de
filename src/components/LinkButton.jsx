import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class LinkButton extends Component{
    render() {
        return (
            <Button
                as='a'
                href={this.props.href}
                target='_blank'
                rel='noopener noreferrer'
            >
            {this.props.displayText}
            </Button>
        )
    }
}