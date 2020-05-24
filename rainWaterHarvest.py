def rainWaterHarvest(a):
	n=len(a)
	left_max=[0]*n
	right_max=[0]*n
	left_max[0]=a[0]
	right_max[n-1]=a[n-1]
	for i in range(1,n):
	    left_max[i]=max(left_max[i-1],a[i])
	for i in range(n-2,-1,-1):
	    right_max[i]=max(right_max[i+1],a[i])
	ans=0
	for i in range(1,n):
	    ans+=min(left_max[i],right_max[i])
	return ans
