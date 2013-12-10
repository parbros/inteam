//= require jquery-1.9.1.min
//= require_tree .
//= require_tree ./plugins
//= require_tree ./demos

$(document).ready(function() {
  $('#count-textarea1, #count-textarea2').textareaCount({
    maxCharacterSize: -2,
    warningNumber: 40,
    displayFormat : '#input caracteres | #words palabras'
  })
})
