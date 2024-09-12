#' Demographic characteristics of voters and political parties
#'
#' The UK election dataset contains data for a random sample of 41 996
#' UK adults who voted in the UK 2019 general election. For each adult
#' in this sample, the political party they voted for and which age group
#' they belonged to were recorded. The votes were then categorised
#' according to two variables
#'
#' @format A data frame with 40 rows and 4 variables:
#' \describe{
#'  \item{count}{the number of voters}
#'  \item{party}{the political party voted for, taking the values con (for the
#'  Conservative Party), lab (for the Labour Party), libdem (for the
#'  Liberal Democrat Party), snp (for the Scottish National Party) and
#'  other}
#'  \item{gender}{the gender the voter identified with, taking the values male
#'      and female}
#'  \item{age}{the age group the voter belongs to, taking the values 18 to 24,
#'    25 to 49, 50 to 64, 65+}
#' }
#'
#' @source \url{www.yougov.co.uk, https://yougov.co.uk/topics/politics/articlesreports/
#'    2019/12/17/how-britain-voted-2019-general-election}
#'
#' @usage data(ukElection)

"ukElection"
