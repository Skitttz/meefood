export function formatterValueCurrency(value:number){
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  })
}

export function formatPhoneNumber(value: string) {
  const phoneNumberFormated = value.replace(/\D/g, '');

  return phoneNumberFormated
    .replace(/^(\d{0,2})/, '($1') 
    .replace(/(\(\d{2})(\d{0,5})/, '$1) $2') 
    .replace(/(\d{5})(\d{0,4})/, '$1 $2') 
    .trim(); 
}