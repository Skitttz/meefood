export function formatterValueCurrency(value:number){
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  })
}