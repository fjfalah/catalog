const setOrder = (sort) => {
  switch (sort) {
  case 'terbaru':
    return null

  case 'terpopuler':
    return [{ key: 'favouriteCount', operator: 'desc' }]

  case 'termurah':
    return [{ key: 'price.amount' }]

  case 'termahal':
    return [{ key: 'price.amount', operator: 'desc' }]

  default:
    return null
  }
}

const setPrice = (prices) => {
  switch (prices) {
  case 'semua':
    return []
  case '0-50000':
    return [{ key: 'price.amount', operator: '<=', value: 50000 }]
  case '50000-100000':
    return [
      { key: 'price.amount', operator: '>', value: 50000 },
      { key: 'price.amount', operator: '<=', value: 100000 },
    ]
  case '100000-150000':
    return [
      { key: 'price.amount', operator: '>', value: 100000 },
      { key: 'price.amount', operator: '<=', value: 150000 },
    ]
  case '150000-1000000':
    return [
      { key: 'price.amount', operator: '>', value: 150000 },
      { key: 'price.amount', operator: '<=', value: 1000000 },
    ]

  default:
    return []
  }
}

// const setPrice = (prices) => {
//   const price = []
//   prices.map((item) => [...price, priceCategory(item)])
//   console.log(price)
//   return price
// }

const setColor = (colors) => {
  const color = []
  colors.map((item) => {
    color.push({
      key: `colorVariant.all.${item}`, operator: '==', value: true,
    })
  })

  return color
}

const setSize = (sizes) => {
  const size = []
  sizes.map((item) => {
    size.push({
      key: `sizeVariant.all.${item}`, operator: '==', value: true,
    })
  })

  return size
}

const setFilter = (prices, colors, sizes) => {
  const filter = [setPrice(prices), setColor(colors), setSize(sizes)]
  return [].concat(...filter)
}

export default {
  setOrder,
  setFilter,
}
