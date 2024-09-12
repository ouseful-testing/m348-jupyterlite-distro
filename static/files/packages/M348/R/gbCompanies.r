#' The GB companies dataset
#'
#' A subset of the data frame \code{europeanCompanies} corresponding to
#' companies in the United Kingdom engaged in the manufacture of 
#' rubber and plastics.
#'
#' @format A data frame with 28 rows and 4 variables:
#' \describe{
#'    \item{country}{a categorical variable taking the values GB (for United
#'	Kingdom of Great Britain and Northern Ireland), FR (for France)
#'	and DE (for Germany)}
#'    \item{product}{a categorical variable giving the industrial classification
#'	linked to what a company produces taking the coded following
#'	values: 10 (for manufacture of food products), 20 (for manufacture
#'	of chemicals and chemical products), 22 (for manufacture of rubber
#'	and plastic products), 26 (for manufacture of computer, electronic
#'	and optimal products), 27 (for manufacture of electrical equipment)}
#'    \item{resAndDev}{a binary variable taking the values 1 (if the company
#'	participates in research and development) and 0 (if the company
#'	doesn't participate in research and development)}
#'    \item{averageWage}{average wage of an employee in 2018 (calculated by
#'	taking the cost of the employees for that company in 2018 (in
#'	thousands of Euro) and dividing by the number of employees in
#'	2018)}
#' }
#'
#' @source Bureau van Dijk 
#'	\url{https://www.eui.eu/Research/Library/ResearchGuides/Economics/Statistics/DataPortal/AmadeusBvD}
#'
#' @usage data(gbCompanies)

"gbCompanies"
