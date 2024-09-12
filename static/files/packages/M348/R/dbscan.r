#' A function to implement the clustering algorithm DBScan
#'
#' A function to implement the clustering algorithm DBScan. The output gives the allocation for each
#' observation, with -1 denoting when an observation is deemed to be an outlier.
#'
#' @param	dataset a data frame, matrix or vector containing the observations
#' @param	minpts the numbers of observations (including itself) that an observation needs 
#' to be close to an interior point
#' @param	epsilon a parameter giving the maximum separation between two `close' observations
#' @param	method the dissimilarity measire to be used. Note this must be one if the options 
#' available in \code{dist}
#'
#' @return A vector giving the cluster allocations for each observation.
#' with "-1" for outliers.  
#'
#' @author Karen Vines
#' 
#' @keywords dbscan
#'
#' @examples
#' X <- c(10,8,9,2,1,0,-4)
#' clusters <- dbscan(X, minpts=2,epsilon=3)
#'
#' @export




dbscan <- function(dataset,minpts=4,epsilon = 3,method="euclidean"){

	set.seed(42)
# 	Set number of clusters to zero

	nclus <- 0
	dataset <- as.data.frame(dataset)
	npts <- dim(dataset)[1]
	nvars <- dim(dataset)[2]

	labpts <- rep(0,npts)


# Examine a point

	for (ipt in 1:npts){

# 	skip to the next if its already got a label
		if (labpts[ipt] != 0) {
#			cat("Skipping point ",ipt,"\n")
			next
		}


# 	work out if its a core point
		ppt <- dataset[ipt,]
		neighbours <- .rangequery(datpts=dataset,ppt=ppt,epsilon=epsilon,method=method)
		if (length(neighbours) < minpts){
#			cat("point",ipt," is an outlier as it only has",length(neighbours)," neighbours \n")
			labpts[ipt] <- -1
			next
		}

#		cat("Working on point ", ipt, "whose label is ",labpts[ipt],"\n")
#		cat("the neighbours set is",neighbours,"\n")

#		stop()

# 		Increase the numer of clusters by 1
		nclus <- nclus + 1
#		if (nclus > 2.5) stop()

# Put the current point in the new cluster
		labpts[ipt] <- nclus

# form the seed set

	
		seedset <- neighbours
		seedset <- neighbours[neighbours != ipt]
		nseed <- length(seedset)


#		cat("for cluster ",nclus, " the initial seedset is ",seedset,"\n")


		j <- 0
		while (j < nseed){
			j <- j + 1
			jpt <- seedset[j]

			ptchk <- c(ipt)

#			cat("looking at the point ",j," in the seedset\n")

			if (labpts[jpt] == -1){
				labpts[jpt] <- nclus
			}
			if (labpts[jpt] != 0) {
				next
			}

			labpts[jpt] <- nclus

			neighj <- .rangequery(dataset,dataset[jpt,],epsilon,method)
			ptchk <- c(ptchk, jpt)
#			seedset <- neighbours[neighbours != ipt]

#			cat("neighj is",neighj,"\n")
			if (length(neighj) >= minpts) {
				addpts <- setdiff(neighj, seedset)
				seedset <- c(seedset,addpts)
				nseed <- length(seedset)
#				cat("addpts is therefore ",addpts,"\n")
			}
		

#			cat("so seedset is now ",seedset,"\n")
#			stop()
			if (j > npts){
				cat("j is too big, j is:",j,"\n")
			 	stop()
			}

		}

#		stop()
#		cat("After having competed cluster ", nclus,"\n")
#		print(labpts)

	}
#	cat("the final allocation to clusters is \n")
#	print(labpts)
	labpts
}

		


	


	
