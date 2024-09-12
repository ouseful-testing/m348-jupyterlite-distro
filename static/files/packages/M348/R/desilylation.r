#' Optimising yield of an alcohol
#'
#' The pharmaceutical company GlaxoSmithKline conducted an
#' experiment where they were interested in identifying the experimental
#' conditions that would optimise the yield of an alcohol from a chemical
#' reaction. The type of chemical reaction they used in the experiment is
#' called desilylation. The chemists identified four variables that may
#' affect the yield, namely, time, temperature, volumes of NMP (a
#' solvent) and molar equivalents of the reagent (the substance added to
#' cause a chemical reaction), where a molar equivalent is the ratio of
#' the moles of one compound to the moles of another.
#'
#' @format A data frame with 30 observations and 5 variables:
#' \describe{
#'  \item{yield}{the percentage yield of the alcohol of interest. (Percentage
#'  yield is the ratio of the actual molar yield and the theoretical molar
#' yield, multiplied by 100.)}
#'  \item{temp}{the standardised value of the 
#'      the temperature at which the reaction is run (in degrees Celsius)}
#'  \item{time}{the standardised value of the 
#'      the reaction time, measured in hours}
#'  \item{nmp}{the standardised value of the concentration of the solution, 
#'      measured in volumes of NMP (where one volume
#'      of the solvent corresponds to approximately twp millilitres.)}
#' \item{equiv}{the standardised value of the 
#'         molar equivalents of the reagent, where a molar equivalent 
#'        is the ratio of the moles of one compound to the moles of another}
#' }
#'
#' @source Owen, M.R., Luscombe, C., Lai, L., Godbert, S., Crookes, D.L. and
#'           Emiabata-Smith, D. (2001). Efficiency by design: optimisation in process
#'             research. \emph{Organic Process Research and Development} 5, 308-323.
#'
#' @usage data(desilylation)

"desilylation"
