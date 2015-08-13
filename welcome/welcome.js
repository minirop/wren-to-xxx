'use strict';
// API

class IO {
	static print() {
		var args = "";
		for(var arg of arguments) {
			args += arg;
		}
		console.log(args);
	}
}

class Fiber {
	constructor(fn) {
		this.generator = fn();
		this.done = false;
	}
	
	call() {
		let v = this.generator.next();
		this.done = v.done;
		return v.value;
	}

	get isDone() {
		return this.done;
	}
}

// script

IO.print("hello, world!");

let adjectives = new Fiber(function*() {
	yield * ["small", "clean", "fast"][Symbol.iterator](function*(word) {
		yield word;
	});
});

while(!adjectives.isDone) IO.print(adjectives.call());
