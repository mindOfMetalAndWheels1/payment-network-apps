export const emptyAddress = "0x0000000000000000000000000000000000000000"

export const compressedAddress = (a, padding) => {
  padding = padding || 4;
  return `${a.slice(0, padding + 2)}...${a.slice(a.length - padding)}`
}

export const isEmptyAddress = (a) =>
  a == emptyAddress

