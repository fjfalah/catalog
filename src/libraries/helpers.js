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

export default {
  getVariantByKey,
  currencyFormat,
}
