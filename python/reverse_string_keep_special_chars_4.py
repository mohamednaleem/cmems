# Question-4:
# Reverse
# a given string keeping its special character at the same place
# Input:
# h@ello
# Output o@lleh
# Input
# a#b@c
# Output c#b@a

def reverse_string_keep_special_chars(s):
    # Create a list to store the characters
    chars = list(s)
    
    # Create a list to store the positions of special characters
    special_chars = {i: c for i, c in enumerate(chars) if not c.isalpha()}
    
    # Filter out the special characters to get only the alphabets
    alphabets = [c for c in chars if c.isalpha()]
    
    # Reverse the list of alphabets
    alphabets.reverse()
    
    # Reconstruct the string, placing special characters back in their positions
    result = []
    alpha_index = 0
    for i in range(len(chars)):
        if i in special_chars:
            result.append(special_chars[i])
        else:
            result.append(alphabets[alpha_index])
            alpha_index += 1
    
    return ''.join(result)

# Test cases
print(reverse_string_keep_special_chars("h@ello"))  # Output: o@lleh
print(reverse_string_keep_special_chars("a#b@c"))  # Output: c#b@a

# Explanation:
# Store Characters: Convert the string to a list of characters.
# Identify Special Characters: Use a dictionary to store the positions and values of special characters.
# Extract Alphabets: Create a list of only the alphabetic characters.
# Reverse Alphabets: Reverse the list of alphabetic characters.
# Reconstruct String: Rebuild the string, placing special characters back in their original positions.
# This approach breaks down the problem into smaller, more manageable steps. Give it a try and let me know if you have any questions!


# 2
# def reverse_string_keep_special_chars(s):
#     # Convert the string to a list to allow modification
#     chars = list(s)
    
#     # Initialize two pointers
#     left, right = 0, len(chars) - 1
    
#     # Function to check if a character is an alphabet
#     def is_alpha(c):
#         return c.isalpha()
    
#     # Loop until the two pointers meet
#     while left < right:
#         # Move the left pointer if it's not an alphabet
#         if not is_alpha(chars[left]):
#             left += 1
#         # Move the right pointer if it's not an alphabet
#         elif not is_alpha(chars[right]):
#             right -= 1
#         # Swap the characters if both are alphabets
#         else:
#             chars[left], chars[right] = chars[right], chars[left]
#             left += 1
#             right -= 1
    
#     # Convert the list back to a string
#     return ''.join(chars)

# # Test cases
# print(reverse_string_keep_special_chars("h@ello"))  # Output: o@lleh
# print(reverse_string_keep_special_chars("a#b@c"))  # Output: c#b@a
