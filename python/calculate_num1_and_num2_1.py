# # question 1
# # A list of numbers will be given, the numbers 5 and 8 are present in the (8 always comes after 5) problem.
# # Num1 : Add all numbers which do not lie between 5 and 8(excluding 5 and 8)
# # Num2 : Numbers formed by concatenating all numbers from 5 and 8(including 5 8) 
# # Num1 + Num2
# # Input:
# # 3,2,6,5,1,4,8,9
# # Output:
# # 5168
# # Num1: 3+2+6+9=20
# # Num2: ‘5’+’1’+’4’+’8’=5148
# # condition2: 5148+20=5168

def calculate_num1_and_num2(numbers):
    # Initialize num1 to 0 and num2 to an empty string
    num1 = 0
    num2 = ""
    # Flag to determine whether to add to num1 or num2
    add_to_num1 = True

    # Iterate through each number in the list
    for num in numbers:
        # If the number is 5, set the flag to False to start adding to num2
        if num == 5:
            add_to_num1 = False
        # If the flag is True, add the number to num1
        if add_to_num1:
            num1 += num
            print(f"num1: {num1}")  # Print the current value of num1
        else:
            # If the flag is False, add the number to num2 as a string
            num2 += str(num)
            print(f"num2: {num2}")  # Print the current value of num2
        # If the number is 8, set the flag back to True to start adding to num1 again
        if num == 8:
            add_to_num1 = True
    # Return num1 and num2 (converted to an integer)
    return num1, int(num2)

# Input list of numbers
# numbers = [3, 2, 6, 5, 1, 4, 8, 9]
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Calculate Num1 and Num2
num1, num2 = calculate_num1_and_num2(numbers)

# Calculate the final result by adding num1 and num2
result = num1 + num2

# Print the results
print(f"Num1: {num1}")
print(f"Num2: {num2}")
print(f"Result: {result}")



def cal_num1_and_num2(numbers):
    num1 = 0
    num2 = ''
    is_add_num1 = True
    for num in numbers:
        if(num == 5):
            is_add_num1 = False
        if is_add_num1:
            num1 += num
        else:
            num2 += str(num)
        if(num == 8):
            is_add_num1 = True
    return num1, int(num2)
    
num1, num2 = cal_num1_and_num2([3,2,6,5,1,4,8,9])
print(f'res{num1 + num2}')
        
    

