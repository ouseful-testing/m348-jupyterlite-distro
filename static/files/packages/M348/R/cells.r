#' Measuring the effect of a toxin on the survival of cells
#'
#' Biologists at the Ruhr-University Bochum, Germany, were interested
#' in the effect of a toxin on the survival of certain cells. In particular,
#' they wanted to know if the toxin will change the proportion of
#' surviving cells in a sample. To find out, they conducted an
#' experiment, called a bioassay (a bioassay is a method to determine
#' the strength of a substance by comparing its effects on living cells or
#' organisms with the effects of a standard substance or no treatment at
#' all). The survival of the cells is measured using a measure called the
#' optical density, with high values of the optical density indicating high
#' proportions of survival.
#'
#' In their experiment, the researchers treated six samples of the cells
#' with the toxin of interest and left six further samples untreated. They
#' then ran the experiment over two consecutive days. On the first day,
#' measurements of the optical density were taken on three of the treated
#' samples and three of the untreated samples. Then on the second day,
#' measurements of the optical density were taken on the three
#' remaining treated samples and the three remaining untreated samples.
#'
#' @format A data frame with 12 observations and 3 variables:
#' \describe{
#'  \item{opticalDensity}{the optical density measurement (to one decimal
#'       place)}
#' \item{treatment}{an indicator variable taking the value 1 if the sample
#' was treated with the toxin, and the value 0 if the sample was
#' untreated}
#' \item{day}{the day the sample was measured, taking the value 1 if the
#' measurement was taken on the first day of the experiment, and the
#' value 2 if the measurement was taken on the second day}
#' }
#'
#'
#' @usage data(cells)

"cells"
