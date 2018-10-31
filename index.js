// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
let buttonId = document.getElementById('save_lincoln')
let input = document.getElementById('interval')
buttonId.addEventListener("click",  ()=> saveLincoln(parseInt(input.value)))



function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}
