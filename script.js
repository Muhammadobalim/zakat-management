const hand = document.getElementById('hand');
const bank = document.getElementById('bank');
const investment = document.getElementById('investment');
const owed = document.getElementById('owed');
const debt = document.getElementById('debt');
const misc = document.getElementById('misc');
const net = document.getElementById('net');
const form = document.getElementById('form');
const zakat = document.getElementById('zakat');

const showError = (tagName, message) => {
  const formControl = tagName.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const handleSubmit = (e) => {
  if (hand.value == '') {
    showError(hand, 'Cash at hand is Required.');
  } else {
    showSuccess(hand);
  }
  if (bank.value == '') {
    showError(bank, 'Cash in Bank is Required.');
  } else {
    showSuccess(bank);
  }
  if (investment.value == '') {
    showError(investment, 'Value of Investment is Required.');
  } else {
    showSuccess(investment);
  }
  if (owed.value == '') {
    showError(owed, 'Cash at hand is Required.');
  } else {
    showSuccess(owed);
  }
  if (debt.value == '') {
    showError(debt, 'Money owed is Required.');
  } else {
    showSuccess(debt);
  }
  if (misc.value == '') {
    showError(misc, 'Miscellaneous expenses Required.');
  } else {
    showSuccess(misc);
  }

  const income =
    Number(hand.value) +
    Number(bank.value) +
    Number(investment.value) +
    Number(owed.value);
  const liabilities = Number(debt.value) + Number(misc.value);
  const netIncome = income - liabilities;
  net.value = netIncome;
 
  
  if (netIncome < 136640) {
    zakat.innerHTML = "You do not meet the minimum requirement to pay Zakat for this Year"
  }
  else {
    const zakatValue = 0.025 * netIncome;
    zakat.innerHTML = "You should pay " + "₦" + Math.ceil(zakatValue) + " in zakat for the year."
  }
  e.preventDefault();
};

form.addEventListener('submit', handleSubmit);
