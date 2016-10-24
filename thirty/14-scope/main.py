class Difference:
    def __init__(self, a):
        self.__elements = a
    def computeDifference(self):
      max = min = self.__elements[0]
      for n in self.__elements:
        if n < min:
          min = n
        if n > max:
          max = n

      self.maximumDifference = max - min

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
