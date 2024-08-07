// 21. Merge Two Sorted List
// You are given the heads of two sorted linked lists list1 and list2
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists

// return the head of the merged linked list

var  mergeTwoLists = function(list1, list2){
    let curr = new ListNode()
    const dummy = curr
    while(list1 && list2 ){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    if (list1){
        curr.next = list1
    } 
    if (list2){
        curr.next = list2
    }

    return dummy.next
}

console.log([1,2,4], [1,3,4])// [1,1,2,3,4]