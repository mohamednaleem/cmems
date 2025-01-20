### Steps to Solve the Problem:
# 1. **Parse the Input**: Split the input string to separate each string-number pair.
# 2. **Calculate the Sum of Squares**: For each number, calculate the sum of the squares of its digits.
# 3. **Determine Rotation**: Based on whether the sum is even or odd, decide the rotation direction and amount.
# 4. **Rotate the String**: Rotate the string accordingly.
# 5. **Combine Results**: Combine the rotated strings to form the final output.

### Python Code:
# Here's a Python function to achieve this:

def rotate_string(s, n):
    """Rotate string s to the right by n positions."""
    return s[-n:] + s[:-n]

def process_string_number_pair(pair):
    """Process a single string-number pair."""
    string, number = pair.split(':')
    number = list(map(int, number))
    
    # Calculate the sum of squares of the digits
    sum_of_squares = sum(digit ** 2 for digit in number)
    
    # Determine rotation based on the sum of squares
    if sum_of_squares % 2 == 0:
        # Rotate right by 1 position
        rotated_string = rotate_string(string, 1)
    else:
        # Rotate left by 2 positions (left rotation by 2 is equivalent to right rotation by len(string) - 2)
        rotated_string = rotate_string(string, len(string) - 2)
    
    return rotated_string

def process_input(input_string):
    """Process the entire input string."""
    pairs = input_string.split(', ')
    result = [process_string_number_pair(pair) for pair in pairs]
    return ', '.join(result)

# Test cases
input_string = "rhdt:246, ghftd:1246"
output = process_input(input_string)
print(output)  # Output: trhd, ftdgh


### Explanation:
# 1. **rotate_string Function**: This helper function rotates a string `s` to the right by `n` positions.
# 2. **process_string_number_pair Function**: This function processes a single string-number pair:
#    - Splits the pair into the string and the number.
#    - Calculates the sum of the squares of the digits.
#    - Determines the rotation direction based on whether the sum is even or odd.
#    - Rotates the string accordingly.
# 3. **process_input Function**: This function processes the entire input string:
#    - Splits the input into individual pairs.
#    - Processes each pair using the `process_string_number_pair` function.
#    - Combines the results into the final output string.

# This approach ensures that each string is rotated correctly based on the sum of the squares of its associated digits. Let me know if you have any questions or need further clarification!