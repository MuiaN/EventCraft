const formatter = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
});

export function formatCurrency(amount: number): string {
  return formatter.format(amount);
}