import React from 'react';

class Node extends React.PureComponent{

    constructor(value) {
        this.value = value;
        this.adjacents = []; // adjacency list
    }
    
    addAdjacent(node) {
        this.adjacents.push(node);
    }
    
    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }
    
    getAdjacents() {
        return this.adjacents;
    }
    
    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}


export default Node;