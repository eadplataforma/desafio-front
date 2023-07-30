export const phoneValidator = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "");

  return onlyNumbers.length == 11 ? true : false;
};
