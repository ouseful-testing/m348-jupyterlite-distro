#' A plot function for dist objects
#'
#' A function to produce plots of dissimilarity matrices. It assumes that the input is in the 
#' form of a dist object (produced by the function dist()). There is the option to order the 
#' data points by a clusters given by a clustering algorithm.
#'
#' @param  distobj the dist object to be plotted
#' @param  clusters a vector giving the cluster allocation for the data points used to create distobj
#' @param names a vector giving the names of the clusters
#' @param  max.dist a value giving the assumed maximum dissimilarity in the matrix
#'
#' @return A plot of the dissimilarity matrix.
#'
#' @author Karen Vines
#'
#' @seealso See also \code{\link{dist}}.
#'
#' @keywords plot 
#'
#' @examples
#' X <- c(10,8,9,2,5,0)
#' distX <- dist(X)
#' # Plot of the dissimilarity matrix
#' dissimPlot(distX)
#' # Plot of the dissimilarity ordering by cluster
#' dissimPlot(distX, clusters=c(1,1,1,2,2,2))
#'
#' @export



dissimPlot<- function(distobj, clusters=NULL, names = NULL, max.dist = NULL){


	npts <- attributes(distobj)$Size
	if (is.null(names)){
		if (is.null(clusters)) {
			names <- c(1:npts)
			namepos <- c(1:npts)

		} else {
			names <- unique(sort(clusters))
			namepos <- unique(rank(sort(clusters)))
		}
	} else {
		namepos <- c(1:length(names))
	}


	if (!is.null(clusters)){
		if (length(clusters) != npts){
			cat("Length of cluster allocation does not match the number of data points\n")
			stop()
		}
		ord <- order(clusters)
		ord[ord] <- c(1:npts)
		if (length(names)== npts){
			names[ord] <- names
		}
	} else {
		ord <- c(1:npts)
	}

	dlo <- 0
	if (is.null(max.dist)){
		dhi <- max(distobj)
	} else {
		dhi <- max.dist
		if (dhi < max(distobj)){
			cat("Warning: given maximum dissimilarity (max.dist = ",max.dist,") is less then the actual maximum dissimilarity (",max(distobj),")\n")
		}
	}

	M348red<- "#a92021"
	ncols <- 100
# 	Create vector of color codes
	M348red_alpha_ncol <- rep(M348red,ncols)                    
	for(i in 1:ncols) {
  		M348red_alpha_ncol[i] <- grDevices::adjustcolor(M348red, alpha.f = i / ncols)
	}

	redpalette <- c(grDevices::adjustcolor(M348red, alpha.f = 0),  M348red_alpha_ncol)

	graphics::plot(x=c(0.5,npts+0.5),y=c(0.5,npts+0.5),ylim=rev(c(0.5,npts+0.5)),type="n",pty="s", xlab="",ylab="",xaxt="n",yaxt="n",xaxs="i",yaxs="i")
	graphics::axis(3,at=namepos,labels=names,tck=0)
	graphics::axis(2,at=namepos,labels=names,tck=0)


	graphics::axis(1,at=c(0,(npts+1)),labels=c("",""),tck=0)
	graphics::axis(4,at=c(0,(npts+1)),labels=c("",""),tck=0)



	for (iuse in 1:(npts-1)){
		i <- ord[iuse]
		xlo <- i-0.5
		xhi <- i+0.5
		for (juse in (iuse+1):npts){
			j <- ord[juse]

			ylo <- j-0.5
			yhi <- j+0.5

			xalo <- j - 0.5
			xahi <- j + 0.5
			yalo <- i - 0.5
			yahi <- i + 0.5

			
			dij <- distobj[npts*(iuse-1) - iuse*(iuse-1)/2 + juse-iuse]

			gcol <- round(ncols*(dij-dlo)/(dhi - dlo))	
			
			graphics::polygon(x=c(xlo,xlo,xhi,xhi),y=c(ylo,yhi,yhi,ylo),col=redpalette[gcol],border=NA)
			graphics::polygon(x=c(xalo,xalo,xahi,xahi),y=c(yalo,yahi,yahi,yalo),col=redpalette[gcol],border=NA)

		}
	}
	for (i in 1:npts){
		xlo <- i-0.5
		xhi <- i+0.5
		ylo <- i-0.5
		yhi <- i+0.5

		dij <- 0


		gcol <- round(ncols*(dij-dlo)/(dhi - dlo))	

			
		graphics::polygon(x=c(xlo,xlo,xhi,xhi),y=c(ylo,yhi,yhi,ylo),col=redpalette[gcol],border=NA)

	}

	if (!is.null(clusters)){
		clusvals <- unique(clusters)
		clusvals <- sort(clusvals)
		nclus <- length(clusvals)
		nvals <- 0
		for (iclus in clusvals[1:(nclus-1)]){			
			nci <- length(clusters[clusters==iclus])
			graphics::abline(v=nvals+nci+0.5,lty=2)
			graphics::abline(h=(nvals+nci)+0.5,lty=2)

			nvals <- nvals + nci
		}
	}
}
