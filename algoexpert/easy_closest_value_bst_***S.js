function closestValue(tree, target, closest) {

    if (tree === null || target === closest) return closest;

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) closest = tree.value;

    return target < tree.value ? closestValue(tree.left, target, closest) : closestValue(tree.right, target, closest)
}

function findClosestValueInBst(tree, target) {

    return closestValue(tree, target, tree.value);

}
``