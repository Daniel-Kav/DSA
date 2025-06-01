# def missingNum(arr):
#     nums = set(arr)
#     for i in range(len(arr)):
#         if i not in nums:
#             return i
#     return len(arr)

def missingNum(nums):
    actualSum = sum(nums)
    expectedSum = len(nums)*(len(nums)+1)//2
    return expectedSum - actualSum

    
print(missingNum([0,1]))