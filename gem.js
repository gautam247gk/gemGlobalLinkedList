//class structure that defines a node in linked lists
class Node {
  constructor(key) {
    this.data = key;
    this.next = null;
  }
}

//function to print the sorted and merged linked list
function printList(root) {
  let sortedarr = [];
  for (let i = 0; i < root.length; i++) {
    let node = root[i];

    while (node != null) {
      sortedarr.push(node.data);
      node = node.next;
    }
    sortedarr.sort();
  }
  console.log(sortedarr);
}

//function to insert elements into the linked list
function insert(root, item) {
  var temp = new Node(item);
  var ptr;
  temp.next = null;

  if (root == null) root = temp;
  else {
    ptr = root;
    while (ptr.next != null) ptr = ptr.next;
    ptr.next = temp;
  }
  return root;
}

//function to transform a normla looking list into a linked list
function arrayToList(arr, n) {
  var root = null;
  for (let i = 0; i < n; i++) root = insert(root, arr[i]);
  return root;
}

//root function to iterate over lists inside an array and then print the merged and sorted linked list
function sortedAndMerged(arr1) {
  let root = [];
  for (var i = 0; i < arr1.length; i++) {
    let n = arr1[i].length;
    root.push(arrayToList(arr1[i], n));
  }

  printList(root);
}

//driver code with example from given question
let eg1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

let eg2 = [];

let eg3 = [[]];

sortedAndMerged(eg1);
