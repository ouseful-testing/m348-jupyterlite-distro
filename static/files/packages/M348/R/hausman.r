#' A function to carry out the Hausman test
#'
#' A function to carry out the Hausman test. The null hypothesis is that
#' the estimates from a fixed effects estimator and a random effects estimator are consistent.
#' It is assumed that as a fixed effects estimator, the LSDV estimator is used and for the random
#' effects estimator, the results from \code{lme()} are used.
#'
#' @param  feObj an object obtained after using the LSDV estimator
#' @param  reObj an object obtained after using the random effects estimator.
#'
#' @return The results from carrying out the Hausman test
#'
#' @author Karen Vines
#'
#'
#' @export

hausman <- function(feObj, reObj){
	reVar <- reObj$varFix
	vnames <- dimnames(reVar)[[1]]
	vnames <- vnames[vnames!="(Intercept)"]

	feVar <- stats::vcov(feObj)
	feVar <- feVar[vnames,vnames]
	reVar <- reVar[vnames,vnames]

	fecoef <- feObj$coefficients[vnames]
	recoef <- reObj$coefficients$fixed[vnames]

	vdiff <- feVar - reVar
	coeffDiff <- fecoef - recoef

	vinv <- solve(feVar - reVar)
	chistat <- t(coeffDiff)%*%vinv%*%(coeffDiff)

	pval <- 1-stats::pchisq(chistat,length(vnames))
	if (pval < 0.0005){
		pval <- "< 0.001"
	} else {
		pval <- round(pval,digits=3)
	}

	cat(paste("The value of the test statistic is ",round(chistat,digits=3),".",sep=""),"\n")
	cat(paste("The degrees of freedom are ",length(vnames),".",sep=""),"\n")
	cat(paste("The p-value is ", pval,".",sep=""),"\n")
}

