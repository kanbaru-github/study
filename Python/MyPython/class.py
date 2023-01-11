class Student:
	def __init__(self, name):
		self.name = name

	# クラスメソッドは引数を必ず書く
	def calculateAvg(self, data):
		sum = 0
		for num in data:
			sum += num
		return sum / len(data)

	def judge(self, avg):
		if avg >= 60:
			return 'passed'
		else:
			return 'failed'

a001 = Student('sato')
avg = a001.calculateAvg([70, 65, 50, 90, 30])
print(a001.name)
print(a001.judge(avg))
print(a001.avg)
