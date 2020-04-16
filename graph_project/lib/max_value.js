function maxValue(node, visited=new Set()) {
    let queue = [node];
   let max = 0;
    while(queue.length !==0){
        let node = queue.shift();
        console.log(visited);
        if(!visited.has(node)){
            visited.add(node);
            if (node.val > max) max = node.val;
            if(node.neighbors.length !== 0){
                queue = queue.concat(node.neighbors);
                console.log(queue);
            }

        }
    }
    return max;
}

module.exports = {
    maxValue
};