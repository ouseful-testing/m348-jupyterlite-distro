#' A function to produce residual plots for generalised linear models
#'
#' @param  glmobj an object produced by the fitting of a model using the function glm()
#' @param  plots plots to be produced where 1 for a plot of residuals versus 
#' transformed fitted values; 
#' 2 for an index plot of residuals; 
#' 3 for an index plot of squared residuals; and
#' 4 for normal plot of residuals
#'
#' @return A plot of the silhouette statistics.
#'
#' @author Karen Vines
#' 
#' @seealso{\code{\link{glm}}}
#'
#' @keywords glm 
#'
#' @examples
#' y <- c(10,8,9,2,5,0)
#' x <- c(1,2,3,4,5,7)
#' glmfit <- glm(y~x, family="poisson")
#' glmResidPlot(glmfit)
#'
#' @export






glmResidPlot <- function(glmobj,plots=c(1,2,3,4)){

	par.old <- graphics::par(no.readonly = TRUE)
	graphics::par(ask=T)
	on.exit(graphics::par(par.old))

	graphics::par(mar=c(4.5,5.25,3.5,2))

	
	cltest <- class(glmobj) %in% "glm"
	if (sum(cltest) < 0.5){
		cat("Object has not been obtained from fitting a glm\n")
		stop()
	}
	famobj <- glmobj$family$family

	if (famobj == "binomial"){
		mu.trans <- 2*asin(sqrt(glmobj$fitted.values))
		xlabel <- expression(paste("2 arcsine(",sqrt(widehat(mu)),")"))
	} else if (famobj == "gaussian"){
		mu.trans <- glmobj$fitted.values
		xlabel <- expression(widehat(mu))
	} else if (famobj == "Gamma"){
		mu.trans <- 2*log(glmobj$fitted.values)
		xlabel <- expression(paste("2 log",widehat(mu)))
	} else if (famobj == "poisson"){
		mu.trans <- 2*sqrt(glmobj$fitted.values)
		xlabel <- expression(paste("2 ","sqrt(widehat(mu))"))
	} else {
		cat("Residual for glms using", famobj, "are not available.\n")
		stop()
	}
	resi <- stats::residuals(glmobj,type="deviance")
	hatvals <- stats::influence(glmobj)$hat
	idNum <- c(1:length(resi))
	hatOne <- (hatvals >= 1)
	resi <- resi[!hatOne]
	hatvals <- hatvals[!hatOne]
	mu.trans <- mu.trans[!hatOne]
	idNum <- idNum[!hatOne]

	resi <- resi/sqrt(1-hatvals)

	if (1 %in% plots){
		plot(mu.trans,resi, xlab=xlabel,ylab="Standardised deviance residual",pch=16,bty="l",las=1)

		graphics::abline(h=0,col="gray50")

		low <- stats::lowess(mu.trans,resi,iter=0)
		graphics::lines(low,col="red",lwd=2)
		graphics::title(main="Residuals vs. transformed\n fitted means", cex.main=1.11)
	}

	if (2 %in% plots){
		plot(idNum, resi,xlab="Index number",ylab="Standardised residual",pch=16,bty="l",las=1)

		graphics::abline(h=0,col="gray50")
		graphics::title(main = "Index plot of residuals", cex.main=1.11)
	}

	if (3 %in% plots){	
		plot(idNum,resi^2, col=1+(resi<0),pch=16,xlab="Index number",ylab="Squared\n standardised residual",bty="l",las=1)

		graphics::title(main="Index of squared residuals", cex.main=1.11)
	}

	if (4 %in% plots){
		stats::qqnorm(resi,main="", las=1,bty="l", pch=16)
		graphics::title(main="Normal Q-Q plot", cex.main=1.11)
		stats::qqline(resi)
	}
}
