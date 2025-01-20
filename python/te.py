print("mrcet is an autonomous (\') college")
print("mrcet is an autonomous college")

print('a\
....b')

def foo(a, b, c): pass

print (type(3/4))
print(float(22//3+3/3))
# print(int(1111,10))

def foo(value):
    while True:
        value = (yield value)
bar = foo(1)
print(next(bar))
print(next(bar))
print(bar.send(2))

ans = -4 // 1.5
print(ans)

print(3**4)

a=0
for b in range(0, 10, 2):
    a+= b+1
    print(a)
    
print("foo" * 3)
print(2 ** 3)

b = [0,1,2,3,4,5,6,7,8,9]
print(b[::3])

my_string = 'Hello world'
print(my_string[::-1])
print("".join(reversed(my_string)))

def reversed_string(text):
    result = ""
    for char in text:
        result = char + result
    return print('result', result)
reversed_string(my_string)

# def reversed_string_1(text):
#     if len(text) == 1:
#         return print(text)
#     return reversed_string_1(text[1:]) + text[:1]

# reversed_string_1("Hello, World!")


from collections import UserString

class ReversibleString(UserString):
    def reverse(self):
        self.data = self.data[::-1]

text = ReversibleString("Hello, World!")
text


# Reverse the string in place
text.reverse()
text
