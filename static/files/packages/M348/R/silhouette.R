#' Calculation of silhouette statistics
#' 
#' A function to calculate silhouette statistics for a cluster allocation. For data point \eqn{i}, 
#' the silhouette statistic is defined as  
#' \deqn{s_i = \frac{b_i - a_i}{\max{(a_i,b_i)}}}
#' where \eqn{a_i} is the average dissimilarity between data point \eqn{i} and the other data points 
#' in the same cluster and \eqn{b_i} is the average dissimarity between data point \eqn{i} and the 
#' data points in the next nearest cluster.
#'
#' @param	data a data frame, matrix or vector
#' @param	clusters a vector giving the cluster allocation for the data points used to create distobj
#' @param	method the dissimilarity measure to be used
#'
#' @return A vector giving the silhouette statistic for each observation.
#'
#' @author Karen Vines
#'
#' @seealso \code{\link{plot.silhouette}}, \code{\link{summary.silhouette}}.
#'
#' @examples
#' X <- c(10,8,9,2,5,0)
#' silAns <- silhouette(X, clusters=c(1,1,1,2,2,2))
#' plot(silAns)
#' summary(silAns)
#'
#' @export

silhouette <- function(data, clusters, method="euclidean"){
	tmat <- match.call()
	data <- as.matrix(data)

	npts <- dim(data)[1]

	if (length(clusters) != npts){
		cat("Length of the cluster allocations does not match the number of data points \n")
		stop()
	}
		
	clusvals <- unique(clusters)
#	clusvals <- sort(clusvals)
	ngp <- length(clusvals)

	if (ngp < 2){
		cat("All values belong to the same cluster so all values of the silhouette statistic are equal to zero \n")
		stop()
	}

	avals <- rep(NA,npts)
	bvals <- rep(NA,npts)
	silval <- rep(NA,npts)


	for (i in 1:npts){
		inds <- c(1:npts)
		indin <- inds[clusters == clusters[i]]
		ni <- length(indin)
		oclus <- clusvals[clusvals != clusters[i]]
		btmp <- rep(-1,ngp-1)
		for (j in 1:(ngp-1)){

			indo <- c(i, inds[clusters == oclus[j]])
			nj <- length(indo)
			distij <- stats::dist(data[indo,],method=method)
			distij <- distij[1:(nj-1)]

			btmp[j] <- mean(distij)
		}
#		print(btmp)
		bvals[i] <- min(btmp)	

		if (length(indin)> 1.5){
			indin <- c(i,indin[indin!=i])
			disti <- stats::dist(data[indin,],method=method)
			disti <- disti[1:(ni-1)]
			avals[i] <- mean(disti)
			silval[i] <- (bvals[i]-avals[i])/max(avals[i],bvals[i])
		} else {
			avals[i] <- 0
			silval[i] <- 0
		}


	}
	attributes(silval)$class <- "silhouette"
	attributes(silval)$method <- method
	attributes(silval)$clusters <- clusters
	attributes(silval)$call <- tmat
	
	silval
}
