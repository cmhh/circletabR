#' Net Promoter Score
#'
#' Net promoter score compoenent for Telco providers.
#' @param title Title
#' @param description Description
#' @param data Data frame with three columns with two categorical variables and a single measure (count, proportion, etc.)
#' @param max_val Lower and upper values for bar track
#' @param bar_color Bar color
#' @param track_color Track color
#' @param font_color Font color
#' @param width Width
#' @param height Height
#' @param elementId Block ID
#'
#' @import htmlwidgets
#'
#' @export
#'
#' @examples
#' "hi"
circletab <- function(
  title,
  description,
  data = data.frame(),
  max_value,
  fill_color,
  stroke_width,
  stroke_color,
  width = "100%", height = "auto", elementId = NULL
) {

  # forward options using x
  x = list(
    data = jsonlite::toJSON(data) |> as.character(),
    maxValue = max_value,
    fillColor = fill_color,
    strokeWidth = stroke_width,
    strokeColor = stroke_color
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'circletab',
    x,
    width = width,
    height = height,
    package = 'circletabR',
    elementId = elementId
  )
}

#' Shiny bindings for circletab
#'
#' Output and render functions for using circletab within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a circeltab
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name circletab-shiny
#'
#' @export
circletabOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'circletab', width, height, package = 'circletabR')
}

#' @rdname telcowidgets-shiny
#' @export
renderCircletab <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, circletabOutput, env, quoted = TRUE)
}
