// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }    
}

function addBranchValues(node, branchSum, sums){
    
    if (node === null) return sums;
    
    branchSum += node.value;

    if (node.left === null && node.right === null)
        return sums.push[branchSum];

    addBranchValues(node.left, branchSum, sums);
    addBranchValues(node.right, branchSum, sums);
}

function branchSums(root) {
    
    let sums = [];

    addBranchValues(root, 0, sums);

    return sums;

}

let root = new BinaryTree(1);
root.insert([2,3,4,5,6,7,8,10]);
// console.log(root);

console.log(branchSums(root, 3));