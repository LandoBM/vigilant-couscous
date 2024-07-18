class Node:
    """
    An object for storing a sing node of a linked list.
    Models two attributes - data and the link to the next node in the list
    """

    """Hold data that we are storing"""
    data = None
    """Goes to the next node"""
    next_node = None

    def __init___(self, data):
        self.data = data