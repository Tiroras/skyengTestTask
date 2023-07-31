export const transformDate = (str: string): string => {
  const date = new Date(str)
  const day = date.getUTCDate()
  const mouth = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()

  return `${day >= 10 ? day : `0${day}`}.${mouth >= 10 ? mouth : `0${mouth}`}.${year}`
}
