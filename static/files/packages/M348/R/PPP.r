#' Prices in Japan and the USA
#'
#' This dataset contains quarterly data for Japanese and US wholesale 
#' price indices and the bilateral exchange rate between the United States and 
#' Japan for the period from the first quarter of 1973 until the second quarter of 2008.
#'
#' @format A data frame with 142 rows and 5 variables:
#' \describe{
#' 	\item{year}{year the observation relates to}
#' 	\item{quarter}{quarter the observation relates to, taking values 1, 2, 3 and 4} 
#' 	\item{exchangeRate}{the index of the exchange rate between the US dollar and Japanese Yen (1973Q1 = 100)}
#'	\item{japanPrices}{the index of the general price level in Japan (1973Q1 = 100)}
#'	\item{usPrices}{the index of the general price level in the United States (1973Q1 = 100)}
#' }
#'
#' @source Enders (2015) downloaded from \url{https://wenders.people.ua.edu/3rd-edition.html}

#'
#' @usage data(ppp)

"ppp"
