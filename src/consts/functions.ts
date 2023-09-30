export function average(...arr: number[]): number {
  let res: number = 0;
  for (let i in arr) {
    res += arr[i];
  }
  return Math.round(res / arr.length);
}
