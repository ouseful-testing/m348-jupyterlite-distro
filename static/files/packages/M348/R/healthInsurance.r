#' The Australian National Health Survey
#'
#' This dataset considers data from the 1995 Australian National Health
#' Survey. As part of this survey, data were collected regarding private health insurance. 
#' The Australian health insurance dataset contains data from 20 851 respondents from this survey
#'
#' @format A data frame with 36 rows and 4 variables:
#' \describe{
#'	\item{count}{the number of people}
#'	\item{insurance}{private health insurance type, taking the four possible
#' values inclusive, hospital, ancillary and none}
#' 	\item{age:}{the age group of the respondent, taking the three possible
#' values < 35, 35 to 64 and > 64}
#'	\item{seifa}{the socio-economic index for the area where each respondent
#'    lives, taking the three possible values 1, 2 to 4 and 5}
#' }
#'
#' @source de Jong, P. and Heller, G.Z. (2008) Generalized linear models for insurance data, 
#'   Cambridge: Cambridge University Press
#'
#' @usage data(healthInsurance)

"healthInsurance"
