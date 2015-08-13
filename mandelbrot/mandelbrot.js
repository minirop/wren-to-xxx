'use strict';

// API

class IO {
	static write(arg) {
		process.stdout.write(arg);
	}

	static print(arg) {
		process.stdout.write(arg + '\n');
	}
}

// script

var yMin = -0.2
var yMax = 0.1
var xMin = -1.5
var xMax = -1.1

var output = "";
for (let yPixel = 0;yPixel < 24;yPixel++) {
	var y = (yPixel / 24) * (yMax - yMin) + yMin
	for (let xPixel = 0;xPixel < 80;xPixel++) {
		var x = (xPixel / 79) * (xMax - xMin) + xMin
		var pixel = " "
		var x0 = x
		var y0 = y
		for (let iter = 0;iter < 80;iter++) {
			var x1 = (x0 * x0) - (y0 * y0)
			var y1 = 2 * x0 * y0

			// Add the seed.
			x1 = x1 + x
			y1 = y1 + y

			x0 = x1
			y0 = y1

			// Stop if the point escaped.
			var d = (x0 * x0) + (y0 * y0)
			if (d > 4) {
				pixel = " .:;+=xX$&"[Math.floor(iter / 8)]
				break;
			}
		}

		IO.write(pixel)
	}

	IO.print("")
}
