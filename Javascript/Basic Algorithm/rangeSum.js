// Range Sum of BST
// Given a binary search tree, write a function to find the sum of all values in between two
// given keys. The root node is defined as follows:

//Given the root node of a binary search tree and two integers low and high, 
//return the sum of all values  of all nodes with a value in the inclusive range [low, high].

function rangeSumBST(root, low, high){
    // if the current node is null return 0
    if(!root){
        return 0;
    }
    // if the current node value is within the range [low, high], include it in the sum otherwise exclude it
    const currentVal = (root.val >= low && root.val <= high) ? root.val : 0

    // calculate the sum for the left subtree and the right subtree
    let leftSum = rangeSumBST(root.left, low, high);
    let rightSum = rangeSumBST(root.right, low, high);

    // sum = current node + left subtree sum + right subtree sum
    return currentVal + leftSum + rightSum
}

rangeSumBST()