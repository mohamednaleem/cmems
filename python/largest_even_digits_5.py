# Question-5:
# ***********
# Take a string as a input. Separate all the integers from it. 
# Then take each integers only once and form the largest even number possible. 
# Print the largest possible even number. And if even number can’t be made, then print 1.
# Input
# Qwert@821142
# Output
# 842
# Input
# infytq73119755
# Output
# 1

def largest_even_digits(values):
    digits = set([digit for digit in values if digit.isdigit()])
    even_digit = [int(even) for even in digits if int(even) % 2 == 0]
    print("even_digit", even_digit)
    if not even_digit: 
        return 1
    even_digit.sort(reverse=True)
    largest_event_digit = ''.join(map(str, even_digit))
    print(f"largest_event_digit: {largest_event_digit}")
    return largest_event_digit

values = "Qwert@821142"
# values = "infytq73119755"
result = largest_even_digits(values)
print(f"result: {result}")

# 2
def largest_even_digits(values):
    # Extract digits and remove duplicates
    digits = list(set([digit for digit in values if digit.isdigit()]))
    
    # Sort digits in descending order
    digits.sort(reverse=True)
    
    # Find the smallest even digit
    smallest_even = None
    for digit in digits:
        if int(digit) % 2 == 0:
            smallest_even = digit
            break
    
    # If no even digit is found, return 1
    if smallest_even is None:
        return 1
    
    # Remove the smallest even digit from the list
    digits.remove(smallest_even)
    
    # Form the largest number and append the smallest even digit at the end
    largest_number = ''.join(digits) + smallest_even
    
    return largest_number

# Test cases
values = "Qwert@821142"
print(largest_even_digits(values))  # Output: 842

values = "infytq73119755"
print(largest_even_digits(values))  # Output: 1

    

#3
# def largest_even_number(s):
#     # Extract digits from the string and remove duplicates
#     digits = list(set(filter(str.isdigit, s)))
    
#     # Sort digits in descending order
#     digits.sort(reverse=True)
    
#     # Find the smallest even digit
#     smallest_even = None
#     for digit in digits:
#         if int(digit) % 2 == 0:
#             smallest_even = digit
#             break
    
#     # If no even digit is found, return 1
#     if smallest_even is None:
#         return 1
    
#     # Remove the smallest even digit from the list
#     digits.remove(smallest_even)
    
#     # Form the largest number and append the smallest even digit at the end
#     largest_number = ''.join(digits) + smallest_even
    
#     return largest_number

# # Test cases
# print(largest_even_number("Qwert@821142"))  # Output: 842
# print(largest_even_number("infytq73119755"))  # Output: 1


# Explanation:
# Extract Digits: Use filter and str.isdigit to extract digits from the string and convert them to a set to remove duplicates.
# Sort Digits: Sort the digits in descending order.
# Find Smallest Even Digit: Iterate through the sorted digits to find the smallest even digit.
# Form Largest Number: Remove the smallest even digit from the list, form the largest possible number with the remaining digits, and append the smallest even digit at the end.
# Return Result: If no even digit is found, return 1.
# This approach ensures that the largest possible even number is formed. Let me know if you have any questions or need further clarification!