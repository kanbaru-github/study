def say_hello(greeting):
	print(greeting)

say_hello('hello world')
hello = say_hello
hello('good morning')

def add(num, num2):
	return num + num2
print(add(1, 2))

def avg(num, num2, num3):
	return (num + num2 + num3) / 3
print(avg(9, 4, 2))

def func1(x: str, y: int) -> str:
	"""商品の価格説明を返す

	Args:
		x (str): 商品名
		y (int): 価格

	Returns:
		str: 商品の価格説明を返す
	"""
	return f'{x}は{y}円です'
print(func1('りんご', 100))
