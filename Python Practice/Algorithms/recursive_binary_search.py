# Recursive Binary Search does not return the index value, rather it returns true or false

def recursive_binary_search(list, target):
    # check to see if the list is empty, if not then continue to else
    if len(list) == 0:
        return False
    else: 
        # take the length of the list and divide by 2 for midpoint (length is the position)
        midpoint = (len(list))//2
        # if the midpoint equals the target number tha true, if not continue to else
        if list[midpoint] == target:
            return True
        else:
            # is the value at the midpoint is less than the target 
            if list[midpoint] < target:
                # if yes, start a new list starting at the midpoint to the end
                return recursive_binary_search(list[midpoint+1:], target)
            else:
                # if no, start at the beginning of the list to the midpoint
                return recursive_binary_search(list[:midpoint],target)

def verify(result):
    print("Target found: ", result)

numbers = [1,2,3,4,5,6,7,8]
result = recursive_binary_search(numbers, 5)
verify(result)

result = recursive_binary_search(numbers, 12)
verify(result)