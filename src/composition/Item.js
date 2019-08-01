import React, {Component} from 'react';

class Item extends Comment {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

export default Item;