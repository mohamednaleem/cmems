
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        print(f"i {i}")
        print(f"n {n}")
        if n % i == 0:
            return False
    return True

# Test the function
num = 4
if is_prime(num):
    print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")


### Explanation:
# 1. **`if n <= 1:`**: Checks if the number is less than or equal to 1. If so, it's not a prime number.
# 2. **`for i in range(2, n):`**: Loops through all numbers from 2 up to `n-1`.
# 3. **`if n % i == 0:`**: Checks if `n` is divisible by `i`. If it is, `n` is not a prime number.
# 4. **`return True`**: If no divisors are found, the number is prime.

# This version is easier to understand but less efficient for large numbers. It's a good starting point for learning, though! If you have any more questions or need further assistance, feel free to ask.

# 2
# def is_prime(n):
#     if n <= 1:
#         return False
#     for i in range(2, int(n**0.5) + 1):
#         if n % i == 0:
#             return False
#     return True

# # Test the function
# num = 1
# if is_prime(num):
#     print(f"{num} is a prime number")
# else:
#     print(f"{num} is not a prime number")


# This function works by:
# 1. Checking if the number is less than or equal to 1 (not prime).
# 2. Iterating from 2 to the square root of the number.
# 3. Returning `False` if the number is divisible by any of these values.
# 4. Returning `True` if no divisors are found.

# Feel free to test it with different numbers! If you have any questions or need further explanation, just let me know.

# Source: Conversation with Copilot, 30/09/2024
# (1) Python Program to Check Prime Number. https://www.programiz.com/python-programming/examples/prime-number.
# (2) Python Program to Check Prime Number - GeeksforGeeks. https://www.geeksforgeeks.org/python-program-to-check-whether-a-number-is-prime-or-not/.
# (3) 5 Best Ways to Find Prime Numbers in Python - Finxter. https://blog.finxter.com/5-best-ways-to-find-prime-numbers-in-python/.
# (4) Python Program to Check Prime Number - STechies. https://www.stechies.com/python-prime-number/.
# (5) Getty Images. https://www.gettyimages.com/detail/photo/prime-numbers-illustration-royalty-free-image/1215123346.