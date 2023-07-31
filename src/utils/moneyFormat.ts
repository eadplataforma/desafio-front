export function moneyFormat(value: number): string {
  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formater.format(value);
}
