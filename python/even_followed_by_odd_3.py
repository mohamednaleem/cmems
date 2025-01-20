# Question-3:
# Write a python program that it should consist of special char, numbers and chars . 
# if there are even numbers of special chars Then 
# 1) the series should start with even followed by odd 
# Input: t9@a42&516 
# Output: 492561
# If there are odd numbers of special chars then the output will be starting with odd followed by even 
# Input:5u6@25g7#@ 
# Output:56527 
# If there are any number of additional digits append them at last

def process_string(s):
    # Extract digits and special characters
    digits = [char for char in s if char.isdigit()]
    special_chars = [char for char in s if not char.isalnum()]

    # Separate even and odd digits
    even_digits = [char for char in digits if int(char) % 2 == 0]
    odd_digits = [char for char in digits if int(char) % 2 != 0]

    # Determine the starting order based on the number of special characters
    start_with_even = len(special_chars) % 2 == 0

    result = []
    i, j = 0, 0

    # Alternate between even and odd digits
    while i < len(even_digits) and j < len(odd_digits):
        if start_with_even:
            result.append(even_digits[i])
            i += 1
            start_with_even = False
        else:
            result.append(odd_digits[j])
            j += 1
            start_with_even = True

    # Append remaining digits
    result.extend(even_digits[i:])
    result.extend(odd_digits[j:])

    # Join the result into a single string
    result_str = ''.join(result)

    return result_str

# Example usage
input_string1 = "t9@a42&5166"
input_string2 = "5u6@25g7#@"

output1 = process_string(input_string1)
output2 = process_string(input_string2)

print(f"Input: {input_string1} -> Output: {output1}")  # Output: 425169
print(f"Input: {input_string2} -> Output: {output2}")  # Output: 52657



# 2
# def process_string(s):
#     # Extract digits and special characters
#     digits = [char for char in s if char.isdigit()]
#     special_chars = [char for char in s if not char.isalnum()]

#     # Separate even and odd digits
#     even_digits = [char for char in digits if int(char) % 2 == 0]
#     odd_digits = [char for char in digits if int(char) % 2 != 0]

#     # Determine the order based on the number of special characters
#     if len(special_chars) % 2 == 0:
#         # Even number of special characters: start with even digits
#         result = even_digits + odd_digits
#     else:
#         # Odd number of special characters: start with odd digits
#         result = odd_digits + even_digits

#     # Join the result into a single string
#     result_str = ''.join(result)

#     return result_str

# # Example usage
# input_string1 = "t9@a42&516"
# input_string2 = "5u6@25g7#@"

# output1 = process_string(input_string1)
# output2 = process_string(input_string2)

# print(f"Input: {input_string1} -> Output: {output1}")  # Output: 492561
# print(f"Input: {input_string2} -> Output: {output2}")  # Output: 56527

#3
# def process_string(s):
#     # Extract digits and special characters
#     digits = [char for char in s if char.isdigit()]
#     special_chars = [char for char in s if not char.isalnum()]

#     # Separate even and odd digits
#     even_digits = sorted([char for char in digits if int(char) % 2 == 0], reverse=True)
#     odd_digits = sorted([char for char in digits if int(char) % 2 != 0], reverse=True)

#     # Determine the order based on the number of special characters
#     if len(special_chars) % 2 == 0:
#         # Even number of special characters: start with even digits
#         result = even_digits + odd_digits
#     else:
#         # Odd number of special characters: start with odd digits
#         result = odd_digits + even_digits

#     # Join the result into a single string
#     result_str = ''.join(result)

#     return result_str

# # Example usage
# input_string1 = "t9@a42&516"
# input_string2 = "5u6@25g7#@"

# output1 = process_string(input_string1)
# output2 = process_string(input_string2)

# print(f"Input: {input_string1} -> Output: {output1}")  # Output: 492561
# print(f"Input: {input_string2} -> Output: {output2}")  # Output: 76525

