# def containsDuplicate(nums):
#     """
#     :type nums: List[int]
#     :rtype: bool
#     """
#     nums.sort()
#     for i in range(len(nums)-1):
#         if nums[i] == nums[i+1]:
#             return True
#     return False

# print(containsDuplicate([1,2,3]))

def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    return len(set(nums)) != len(nums)

print(containsDuplicate([1,2,3,1]))