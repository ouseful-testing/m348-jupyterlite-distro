#' A function to plot silhouette objects
#'
#' A function to plot the object created by the function \code{silhouette()}.
#'
#' @param  silobj an object produced by the function \code{silhouette}
#' @param  \dots parameters relevant to the particular plotting method and other graphical parameters
#'
#' @return A plot of the silhouette statistic.
#'
#' @author Karen Vines
#' 
#' @seealso{\code{\link{silhouette}}, \code{\link{summary.silhouette}}}
#'
#' @keywords silhouette 
#'
#' @examples
#' X <- c(10,8,9,2,5,0)
#' silAns <- silhouette(X, clusters=c(1,1,1,2,2,2))
#' silhouettePlot(silAns)
#' summary(silAns)
#'
#' @export




silhouettePlot <- function(silobj,...){
	npts <- length(silobj)
	clus <- attributes(silobj)$clusters
	gps <- sort(unique(clus))
#	par(mar=c(2.5,2.5,0.5,0.5))
	plot(x=c(0,npts+1),y=c(-1,1),type="n",pty="s",xaxt="n",ylab="Silhouette statistic",xlab="",...)
	graphics::abline(h=0)
	nstart <- 0

	for (iclus in gps){
		sils <- silobj[clus==iclus]
		sils <- sort(sils,decreasing=T)
		ngp <- length(sils)
		for (i in 1:ngp){
			xlo <- nstart + i-0.5
			xhi <- nstart + i+0.5
			ylo <- 0
			yhi <- sils[i]
			
			
			graphics::polygon(x=c(xlo,xlo,xhi,xhi),y=c(ylo,yhi,yhi,ylo),col="grey",border=NA)
		}
		graphics::mtext(iclus, side =1, at=0.5 + nstart + ngp/2)
		nstart <- nstart + ngp
		if (nstart < npts){
			graphics::abline(v=nstart + 0.5,lty=2)
		}
	}
}
