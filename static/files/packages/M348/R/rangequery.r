.rangequery <- function(datpts,ppt,epsilon,method){

	npts <- length(datpts[,1])
	is.close <- rep(NA,npts)
	nvars <- length(datpts[1,])
	for (i in 1:npts){
		dat <- rbind(ppt,datpts[i,])

#		print(dat)
#		if (i > 4) stop()
		dists <- stats::dist(dat,method=method)
#		cat(i,dists,"\n")
		if (dists[1] > epsilon){
			is.close[i] <- 0
		} else {
			is.close[i] <- 1
		}
	}
	neighbours <- c(1:npts)[is.close==1]
	neighbours
}
