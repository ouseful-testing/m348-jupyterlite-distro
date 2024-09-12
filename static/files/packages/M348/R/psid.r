#' The panel study of income dynamics
#'
#' This dataset is an extract from a long longitudinal study conducted in the 
#' United States called the Panel Study of Income Dynamics. It began in 1968 
#' with a nationally representative sample of over 18000 individuals living 
#' in 5000 families in the United States. Information on these individuals 
#' and their descendants has been collected continuoulsy, including data 
#' covering employment, income, wealth, expenditures, health, marriage, 
#' childbearing, child development, philanthropy, education and numerous 
#' other topics.
#'
#' @format A data frame with 4165 observations and 8 variables:
#' \describe{
#' 	\item{exper}{years of full-time experience}
#' 	\item{occupation}{taking possible values 1 (blue collar occupation) 
#'				and 0 (other occupations)}
#'	\item{gender}{taking values 0 (male) and 1 (female)}
#'	\item{educ}{years of education}
#'	\item{ethnicity}{taking values 1 (black) 0 (otherwise)}
#' 	\item{wageLog}{log of hourly wages (in cents of dollar)}
#'	\item{period}{Time period}
#'	\item{id}{individual}
#' }
#' @source Stata. by using the command \code{webuse PSIDextract}
#'
#' @usage data(psid)

"psid"
