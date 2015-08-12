IO.print("Hello, world!")

class Wren {
  flyTo(city) {
    IO.print("Flying to ", city)
  }
}

var adjectives = Fiber.new {
  ["small", "clean", "fast"].each {|word| Fiber.yield(word) }
}

while (!adjectives.isDone) IO.print(adjectives.call())
