#' Living Costs and Food Survey
#'
#' Surveys on household expenditure in the UK have been conducted
#' regularly since 1957. These surveys have gone by various names over
#' the years, but became the Living Costs and Food Survey in 2008. The
#' surveys collect information for individuals (over 16) in a UK
#' household about income and expenditure, together with personal
#' information such as age, gender, marital status and employment
#' status. The survey is carried out by the Office for National Statistics
#' in Great Britain and by the Northern Ireland Statistics and Research
#' Agency in Northern Ireland.
#' The data collected from the survey are used for various purposes, such
#' as providing information on household spending patterns for the
#' Retail Price Index, studying how government taxes and benefits affect
#' households, and monitoring food purchasing trends.
#'
#' @format A data frame with 5144 rows and 4 variables:
#' \describe{
#'	\item{employment}{the type of employment of the household reference
#'  person (HRP), taking the values full-time, part-time, unemployed
#'  and inactive (that is, retired or not working and not looking for
#'  work)}
#' 	\item{gender}{the gender that the HRP identifies with, taking the values
#' male and female}
#'	\item{incomeSource}{the main source of household income, taking the
#'  two possible values earned and other}
#' 	\item{tenure}{the type of tenancy for the household's accommodation,
#'  taking the three possible values public rented, private rented and
#' owned}
#' }
#'
#' @source Cathie Marsh Institute for Social Research (2019) 
#'  `Living Costs and Food Survey, 2013: Unrestricted Access Teaching Dataset'. 
#'   2nd edn. Available at: \url{https://doi.org/10.5255/UKDA-SN-7932-2}.
#'
#' @usage data(ukSurvey)

"ukSurvey"
