def jumpingOnClouds(c):
   steps = 0
   i = 0
   while i<len(c)-1:
       if(i+2 >= len(c)) or (c[i] == c[i+2]):
           i += 2
           steps += 1
       else:
           i += 1
           steps += 1
   print(steps)

   array=[0,0,1,0,0,0,1,0]

   jumpingOnClouds(array)