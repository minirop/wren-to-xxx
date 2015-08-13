'use strict';

import Cthulu from "cthulu.js"

class Lovecraft {
	say() {
		return (new Cthulu()).message
	}
}

IO.print((new Lovecraft()).say())
