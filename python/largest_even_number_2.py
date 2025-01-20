#Question-2:
# A string which is a mixture of letter, integer and special char. 
# from which find the largest even number from the available digit after removing the duplicates.
# If an even number is not formed then return -1. 
# Example : 
# Input: hcltech@337 
# Output: -1 
# Input:  Hello#81@21349 
# Output: 842


def largest_even_number(s):
    # Extract digits from the string and remove duplicates
    digits = set([char for char in s if char.isdigit()])
    
    # Filter out even digits
    even_digits = [int(digit) for digit in digits if int(digit) % 2 == 0]
    
    # If no even digits are found, return -1
    if not even_digits:
        return -1
    
    # Sort the digits in descending order to form the largest number
    even_digits.sort(reverse=True)
    
    # Join the digits to form the largest even number
    largest_even = ''.join(map(str, even_digits))
    
    return int(largest_even)

# Example usage
input_string = "Hello#81@21349"
result = largest_even_number(input_string)
print(result)  # Output: 86420
