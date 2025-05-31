def reverse(arr):
    for i in range(len(arr)//2):
        arr[i], arr[len(arr)-1-i] = arr[len(arr)-1-i], arr[i]
    return arr
print(reverse(['Hello', 'Goodbye', '!']))
# def reverse(arr
