# Linear search is an algorithm that searches through all elements in a collection to find one with specific value
# Def = defines a function or a block of code
# DEF accepts two arguments. First the list being searched and the target value we are looking for 
def linear_search(list, target):
    """ Returns the index position of the target if found, else returns none """

    for i in range (len(list)):
        if list[i] == target:
            return i
        return None
    

def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else: 
        print ("Target Not Found in List")

numbers = [1,2,3,4,5,6,7,8,9,10]
# Use a linear search function to search for the target result in the list
result = linear_search(numbers, 12)
verify(result)

result = linear_search(numbers, 1)
verify(result)