#' Open University students
#'
#' This dataset contains data for students who have studied OU 
#' statistics modules on presentations with October start dates between
#' 2015 and 2020.
#' In this dataset, there is one observation associated with each student
#' who studied on each presentation of each statistics module. So,
#' students who studied more than one OU statistics
#' module/presentation over the data collection period, will have a data
#' entry for each module/presentation that they studied. All data have
#' been anonymised so that no individual student can be identified.
#' For the original data (as collected by the OU), there are some
#' incomplete data cases with missing values for some variables. This dataset
#' only includes complete data cases, of which there are a total of 4380.
#'
#' @format A data frame with 1796 rows and 9 variables:
#' \describe{
#' \item{modResult}{overall final module result, taking two possible values 1 (for Pass) or 0 (for Fail)}
#' \item{examScore}{the final exam score, taking values from 0 to 100
#' (rounded to the nearest integer)}
#' \item{contAssScore}{the final continuous assessment score, taking values
#' from 0 to 100 (rounded to the nearest integer)}
#' \item{region}{the geographical (UK) region where the student is based
#' taking the possible values east midlands, east of england, london, northern ireland,
#' north west, north, scotland, south, south east, south west, west
#'  midlands, wales and yorkshire}
#' \item{gender}{the gender the individual identifies with, taking 
#' the values f (female) and m (male)}
#' \item{imd}{the index of multiple deprivation (a
#' measure of the level of deprivation) for the student's (UK) postcode
#' address, taking the values most (for the most deprived areas with
#' IMD values 0 to 35\%), middle (for areas with IMD values 35 to 65\%),
#' least (for the least deprived areas with IMD values 65 to 100\%) and
#' other (for non-UK students or where the value of IMD is unknown)}
#' \item{qualLink}{the OU qualification the student is
#' linked to either as maths (for qualifications containing substantial
#' mathematical content) and not (for all other qualifications or no
#' qualification link)}
#' \item{bestPrevModScore}{the best previous overall final module score,
#' taking values from 0 to 100 (rounded to one decimal place)}
#' \item{age}{the age of the student (in years). So that no individual
#' student can be identified, the age recorded in this dataset is the
#' student's true age (from the original data collected by the OU) with
#' one of the values -2, -1, 0, 1 or 2 randomly added. Thus, the real
#' age of a student whose value of age in the dataset is 36, is equally
#' likely to be 34, 35, 36, 37 or 38.}
#' }
#'
#' @source Data extracted in October 2020 from The Open University
#'
#' @usage data(ouStudents)

"ouStudents"
