#' A function to calculate the Durbin-Watson statistic
#'
#' A function to calculate the DDurbin-Watson statistic for a set of residuals from a linear model. 
#'
#' @param  lmFit an object obtained after fitting a linear model
#'
#' @return The Durbin-Watson statistic
#'
#' @author Karen Vines
#'
#'
#' @export

durbinWatson<-function(lmFit){
    res<-lmFit$residuals # Extract the residuals from the lm object 
    resU<-res[2:length(res)] # the residuals without the first
    resL<-res[1:length(res)-1] # the residuals without the last
    DW<-sum((resU-resL)^2)/sum(res^2) # test statistic 
    DW  
}