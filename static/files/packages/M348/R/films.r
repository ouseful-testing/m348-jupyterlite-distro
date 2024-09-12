#' Popularity of films
#'
#' This dataset is a subset of data from a more comprehensive dataset
#' used in a research project which aimed to determine whether the
#' conventional features of a film (such as its budget and the number of
#' screens on which it is initially launched), are more important in
#' predicting the popularity of the film than the social media features
#' (such as the number of `likes' and `dislikes' the film trailer receives on
#' the online video sharing and social media platform `YouTube').
#'
#' @format A data frame with 169 rows and 9 variables:
#' \describe{
#'  \item{income}{the gross income in millions of US dollars}
#'  \item{budget}{the budget of the film in millions of US dollars}
#'  \item{rating}{the rating of each film on a scale from 1 to 10 
#'  collected from the films website IMDB}
#'  \item{screens}{number of screens (in thousands) on which 
#' each film was initially launched in the US}
#' \item{views}{number of views (in millions) of the film trailer 
#' on YouTube}
#'  \item{likes}{number of likes (in thousands) for the film trailer on YouTube}
#'  \item{dislikes}{number of dislikes (in thousands) for the film trailer on YouTube}
#' \item{comments}{number of comments (in thousands) on the film trailer
#' on YouTube}
#' \item{followers}{aggregate number (in millions) of followers of the top 3
#' actors of each film on the social media platform `Twitter'}
#' }
#'
#' @source Ahmed M, Jahangir M, Afzal H, Majeed A, Siddiqi I. Using
#' Crowd-source based features from social media and Conventional
#' mfeatures to predict the films popularity. InSmart
#' City/SocialCom/SustainCom (SmartCity), 2015 IEEE International
#' Conference on 2015 Dec 19 (pp. 273-278). IEEE.
#'
#' @usage data(films)

"films"
