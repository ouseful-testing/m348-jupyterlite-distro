#' Data from a study of bone marrow transplantation in leukaemia patients
#'
#' Data from 37 patients who received `non-depleted allogeneic bone marrow transplant' as treatment 
#' for their leukaemia. The main aim of this study was to understand what characteristics of a bone 
#' marrow graft recipient and his/her donor were most closely linked with the development or otherwise 
#' of GvHD, and hence to be able to predict for any new patient whether he or she was at high or
#' low risk of developing GvHD after bone marrow transplantation (and, if at high risk, to do 
#' something about it).
#'
#' @format{A data frame with 37 rows and 7 variables:}
#' \describe{
#' \item{recage}{the recipient's age (in years)}
#' \item{recsex}{the recipient's sex (coded 0 for male, 1 for female)}
#' \item{donage}{the age of the donor of the transplanted material (years)}
#' \item{donmfp}{whether the donor was male (coded 0) or female,
#'   and if female whether the donor had ever been pregnant (2) or not (1)}
#' \item{type}{the type of leukaemia that the patient had 
#'   (coded 1 for `acute myeloid leukaemia', 2 for `acute lymphocytic leukaemia' and  
#'    3 for `chronic myeloid leukaemia')}
#' \item{indx}{the ratio of two clinical measurements, the mean counts per minute in
#'   `mixed epidermal cell lymphocyte reactions' and the mean counts per minute in `mixed lymphocyte reactions', 
#' a dimensionless quantity}
#' \item{gvhd}{whether or not the recipient developed GvHD (coded 0 for `no', 1 for `yes')}
#' }
#'
#' @source Bagot, M., Mary, J. Y., Heslan, M., Keuntz, M., Cordonnier, C., Vernant, J. P., Dubertret, L. 
#' and Levy, J. P. (1988) `The mixed epidermal cell lymphocyte-reaction is the most predictive factor of acute
#' graft-versus-host disease in bone marrow graft recipients', \emph{British Journal of Haematology}, \bold{70}, 403--9.
#'
#' @usage data(transplant)

"transplant"

