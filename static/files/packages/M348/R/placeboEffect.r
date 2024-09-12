#' Investigating the placebo effect
#'
#' These data come from a study investigating whether it
#' is possible to induce a placebo effect by just changing someone's
#' mindset (Crum and Langer, 2007). Specifically, the study aimed to
#' see whether participants could gain noticeable physical health benefits
#' from exercise simply by believing that they were doing more exercise.
#'
#' This study was conducted on a group of 75 room attendants. All of the
#' participants happened to be female, though the researchers did not
#' specifically exclude men from taking part. Room attendants were chosen
#' because the nature of their work meant that they were almost
#' certainly fulfilling the government's recommended target for daily
#' activity.
#'
#' The researchers were interested in what the impact would be on some
#' key health measures if the room attendant were simply made more
#' aware of just how active their job required them to be. The
#' room attendants were not asked to change the amount of activity (at
#' work or outside of work) they did. Furthermore, when the researchers
#' analysed the data, they did not pick up any tangible differences in
#' lifestyle by the end of the study.
#'
#' @format A data frame with 75 rows and 10 variables:
#' \describe{
#' \item{attID}{an identifier for each room attendant}
#' \item{informed}{whether the room attendant was informed that she was
#' meeting the exercise guidelines through her work, taking the
#' (coded) values 0 (for no) and 1 (for yes)}
#' \item{age}{the room attendant's age, in years}
#' \item{wt}{the room attendant's weight at the start of the study, measured in
#' pounds to the nearest pound}
#' \item{bmi}{the room attendant's body mass index at the start of the study}
#' \item{percent}{the room attendant's body fat as a percentage of total
#' weight, at the start of the study}
#' \item{percent2}{the room attendant's body fat as a percentage of total
#' weight, at the end of the study}
#' \item{ratio}{the ratio of the room attendant's waist to the room attendant's
#' hips at the start of the study}
#' \item{syst}{the room attendant's systolic blood pressure at the start of the
#' study}
#' \item{diast}{the room attendant's diastolic blood pressure at the start of the
#' study}
#' }
#'
#' @source Crum , Alia J. and Langer, Ellen J. (2007) `Mind-set Matters: Exercise
#' and the Placebo effect', \emph{Psychological Science}, 18, 165--171.
#'
#' @usage data(placeboEffect)

"placeboEffect"
