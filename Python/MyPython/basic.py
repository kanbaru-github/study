print("Good morning")

num = 1
num += 4
print(num)
num2 = 1.23
print(type(num2))
print(1 > 0)

a = ['suzuki', 'sato', 'takahashi']
a[1] = 'tanaka'
print(a[1])

print(1 > 0 and 1 < 0)
print(1 > 0 or 1 < 0)

age = 20
if age >= 20:
	print('adult')
elif age == 0:
	print('baby')
else:
	print('child')

for i in range(5):
	if i == 2:
		continue
	if i == 3:
		break
	print(i)

for i in range(3):
	for j in range(3):
		print(i, j, sep='-')

arr = [2, 4, 6, 8, 10]
sum = 0
for i in range(len(arr)):
	print(arr[i])
	sum += arr[i]
print(sum)
