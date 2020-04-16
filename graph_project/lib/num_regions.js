function numRegions(graph) {

    let graphKeys = Object.keys(graph);
    let regions = [];
    let visited = [];
    let queue = [];

    graphKeys.forEach((node, idx) => {

        if (!visited.includes(node)) {
            visited.push(node);
            regions[idx]= [node];
            queue = graph[node];
        }else{
            queue = [];
            idx = idx + 1;
        }

        console.log(regions);

        while (queue.length !== 0 ){

            let neighbor = queue.shift();
            //console.log(neighbor);

            if (!visited.includes(neighbor)){
                regions[idx].push(neighbor);
                visited.push(neighbor);
                queue = queue.concat(graph[neighbor]);
            }
        }
    });

    regions = regions.filter(el => el);
    console.log(regions);
    return regions.length;    
}

module.exports = {
    numRegions
};

// let graph = { a: ['b'], b: ['a'], c: ['d'], d: ['e', 'c'], e: ['d'] };
// //let graph = { a: [ 'b' ], b: ['a'] };
// //let graph = { x: [''], y: [''], z:[''] };
// console.log(numRegions(graph));