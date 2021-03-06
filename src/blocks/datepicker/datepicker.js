const datepicker = document.getElementsByClassName('js-datepicker__input');
const datepickerTitle = document.getElementsByClassName('datepicker--nav-title');

datepicker[0].value = '19 авг - 23 авг';

$('.js-datepicker__input').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat: 'd, M',
  clearButton: true,
  prevHtml: '<div class=datepicker__nav-arrow>arrow_back</div>',
  nextHtml: '<div class=datepicker__nav-arrow>arrow_forward</div>',
  onShow() {
    datepickerTitle[0].innerHTML = datepickerTitle[0].innerHTML.toString().replace(/[\s.,%]/g, ' ');
  },
  onSelect() {
    datepicker[0].value = datepicker[0].value.replace(/[\s.,%]/g, ' ');
    datepickerTitle[0].innerHTML = datepickerTitle[0].innerHTML.toString().replace(/[\s.,%]/g, ' ');
  },
});
