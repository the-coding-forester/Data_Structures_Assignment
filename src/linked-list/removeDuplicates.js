/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  const unique = new Set();
  let prev = null;
  let current = sortedLinkedList.head;


  while (current !== null) {
    if (unique.has(current.value)) {
      prev.next = current.next;
      current = current.next;
    } else {
      unique.add(current.value);
      prev = current;
      current = current.next;
    }
  }

  return sortedLinkedList;
}

module.exports = removeDuplicates;
