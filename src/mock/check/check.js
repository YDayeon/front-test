function check(predidcate, onSuccess, onFail) {
  if (predidcate()) {
    onSuccess('yes');
  } else {
    onFail('no');
  }
}

module.exports = check;
