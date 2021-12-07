var moment = require('moment')

const FORMAT = "YYYYMM"

module.exports = {
    addMonth(value, amount) {
        return parseInt(moment(value, FORMAT).add(amount, 'month').format(FORMAT))
    },
    asMoment(value, setDate) {
        let aux = moment(value, FORMAT)

        if (setDate) {
            aux.set('date', setDate)
        }

        return aux
    },
    rangeByIncr(value, increment) {
        const values = [value]
        const base = moment(value, FORMAT)

        if (increment >= 0) {
            for (let amount = 1; amount <= increment; amount++) {
                const amAux = parseInt(base.add(1, 'month').format(FORMAT))
                values.push(amAux)
            }
        } else {
            for (let amount = -1; amount >= increment; amount--) {
                const amAux = parseInt(base.add(-1, 'month').format(FORMAT))
                values.push(amAux)
            }
        }

        return values
    }
}