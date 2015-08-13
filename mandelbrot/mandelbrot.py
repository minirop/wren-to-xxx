import math

yMin = -0.2
yMax = 0.1
xMin = -1.5
xMax = -1.1

for yPixel in range(0, 24):
	y = (yPixel / 24) * (yMax - yMin) + yMin
	for xPixel in range(0, 80):
		x = (xPixel / 79) * (xMax - xMin) + xMin
		pixel = " "
		x0 = x
		y0 = y
		for iter in range(0, 80):
			x1 = (x0 * x0) - (y0 * y0)
			y1 = 2 * x0 * y0

			# Add the seed.
			x1 = x1 + x
			y1 = y1 + y

			x0 = x1
			y0 = y1

			# Stop if the point escaped.
			d = (x0 * x0) + (y0 * y0)
			if d > 4:
				pixel = " .:;+=xX$&"[math.floor(iter / 8)]
				break
		print(pixel, end="")
	print("")
