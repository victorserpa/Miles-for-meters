$('#medidas').change(function () {
  $('#medida').remove()
})


$('#medidas').change(function () {
  const select = $('#medidas').val()

  if (select == 'Centímetros') {
    $('#calc').click(function () {
      const cm = parseFloat($('#milhas').val())
      const metros = (cm / 100).toFixed(2)
      $('#metros').val(metros)
    })
  }

  else if (select == 'Milhas') {
    $('#calc').click(function () {
      const milhas = parseFloat($('#milhas').val())
      const metros = (1609.34 * milhas).toFixed(2)
      $('#metros').val(metros)
    })
  }

  else if (select == 'Quilômetros') {
    $('#calc').click(function () {
      const km = parseFloat($('#milhas').val())
      const metros = (1000 * km).toFixed(2)
      $('#metros').val(metros)
    })
  }
})

$(document).ready(function(){
  $("body").addClass("loaded");
});