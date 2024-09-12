#' The Olympics dataset
#'
#' This dataset includes data for the competing nations for each summer
#' Olympics between 1996 and 2016.
#'
#' @format A data frame with 1069 rows and 9 variables:
#' \describe{
#' \item{country}{the name of the nation the observation relates to}
#' \item{countryCode}{a three-letter abbreviation of the nation's name}
#' \item{year}{the year of the summer Olympics the observation relates to}
#' \item{medals}{the number of medals won by a nation at a summer
#' Olympics (as it stood at the end of Tokyo 2020)}
#' \item{lagMedals}{the number of medals won by a nation at the previous
#' summer Olympics (as it stood at the end of Tokyo 2020)}
#' \item{host}{whether a nation is the current host, taking the possible
#' coded values 0 (for not current host) and 1 (for current host)}
#' \item{nextHost}{whether a nation is going to be the next host, taking the
#' possible coded values 0 (for not next host) and 1 (for next host)}
#' \item{population}{total population size (in millions) of a nation in the
#' year of the previous Olympics}
#' \item{gdp}{a nation's GDP per capita (in thousands), relative to the US
#' dollar in 2010, in the year of the previous Olympics}
#' }
#'
#' @source www.wikipedia.org, www.worldbank.org
#'
#' @usage data(olympic)

"olympic"
