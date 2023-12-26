document.addEventListener('DOMContentLoaded', function () {
  const eventCallback = function (e) {
    const phoneRegEx = '+7 (___) ___-__-__';
    let i = 0;
    const def = phoneRegEx.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');

    if (e.type === 'blur') {
      if (val.length < phoneRegEx.match(/([\_\d])/g).length) {
        e.target.value = '';
        document.querySelector('.input_placeholder').placeholder = phoneRegEx;
        return;
      }
    }

    if (def.length >= val.length) val = def;

    let enteredNumber = phoneRegEx.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
    });

    e.target.value = enteredNumber;

    toPh = enteredNumber + phoneRegEx.slice(enteredNumber.length)
    document.querySelector('.input_placeholder').placeholder = toPh;
  }

  const phone_input = document.querySelector('.input');

  for (let ev of ['input', 'blur', 'focus']) {
    phone_input.addEventListener(ev, eventCallback);
  }
});