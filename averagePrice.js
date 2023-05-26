const { inventory } = require("./data.js")

const calculateAveragePrice = (products) => {
    let allPrices = 0
    for (const price of inventory) {
        allPrices += price.price
    }

    let averagePrice = allPrices / products.length

    return averagePrice
}

console.log(calculateAveragePrice(inventory))

