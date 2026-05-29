export function toMinorUnits(amountMajor: number) {
  return Math.round(amountMajor * 100);
}

export function toMajorUnitsString(amountMinor: number) {
  return (amountMinor / 100).toFixed(2);
}
