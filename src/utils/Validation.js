export function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

export function pwReg(text) {
  const re = /^(?=.*[a-zA-Z]).{10,14}$/;
  return re.test(String(text).toLowerCase());
}

/* 영문 검증 로직 */
export function engReg(text) {
  const engReg = /^[a-zA-Z]*$/;
  return engReg.test(String(text).toLowerCase());
}
