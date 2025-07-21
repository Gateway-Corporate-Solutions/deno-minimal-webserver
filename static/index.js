const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('referral')) {
  const referral = urlParams.get('referral');
  if (referral) {
    const input = document.querySelector('input[name="referral"]');
    if (input) {
      input.value = referral;
    }
  }
}