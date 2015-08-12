# API

class IO:
	@staticmethod
	def print(*arguments):
		args = ""
		for arg in arguments:
			args += str(arg)
		print(args)

class Fiber:
	def __init__(self, fn):
		self.gen = None
		self.fn = fn
		self.done = False

	def call(self):
		try:
			if self.gen is None:
				ret = self.fn()
				self.gen = ret;
				return next(self.gen)
			else:
				return next(self.gen)
		except StopIteration:
			self.done = True
		return None

	@property
	def isDone(self):
		return self.done

# script

IO.print("hello, world!");

def unnamed_lambda0():
	for word in ["small", "clean", "fast"]:
		yield word


adjectives = Fiber(unnamed_lambda0);

while not adjectives.isDone:
	IO.print(adjectives.call())
