export const phoneFormat = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");

  const maxLength = 11;
  const formattedNumber = onlyNumbers.slice(0, maxLength);

  let maskedValue = "";

  if (formattedNumber.length > 0) {
    maskedValue += `(${formattedNumber.slice(0, 2)}`;
  }
  if (formattedNumber.length > 2) {
    maskedValue += `) ${formattedNumber.slice(2, 7)}`;
  }
  if (formattedNumber.length > 7) {
    maskedValue += `-${formattedNumber.slice(7)}`;
  }

  return maskedValue;
};
