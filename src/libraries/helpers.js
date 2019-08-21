const getVariantByKey = ({ variants, key, isReadyStock }) => {
  const arr = []
  variants
    .filter((variant) => (isReadyStock ? variant.quantity > 0 : variant.quantity > -1))
    .map((variant) => arr.push(variant[key]))
  return arr.filter((variant, index) => arr.indexOf(variant) >= index)
}

const currencyFormat = (rawNum, type = ',') => {
  const parts = rawNum.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, type)
  return (type === ',') ? parts.join('.') : parts.join(',')
}

const toPascalCase = (str) => {
  if (str.length < 2) return str
  const firstLetter = str[0].toUpperCase()
  return firstLetter + str.slice(1)
}

const toSentenceCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const toCapitalizeEachWord = (str) => {
  const words = str.split(' ').map((word) => toSentenceCase(word))
  return words.join(' ')
}

export default {
  getVariantByKey,
  currencyFormat,
  toPascalCase,
  toSentenceCase,
  toCapitalizeEachWord,
}
