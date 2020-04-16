class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

function breadthFirstSearch(startingNode, targetVal) { 
    let queue = [];
    let visited = [];

    queue.push(startingNode);

    while (queue.length !== 0) {

        let node = queue.shift();

        if (!visited.includes(node)){
            if (node.val === targetVal){
                return node;
            }
            else{
                if (node.neighbors.length !== 0) queue = queue.concat(node.neighbors);
                visited.push(node);
            }
        }
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};

//note to ourselves: concat does not mutate the original, the array must be reassigned!