const { Sequelize, Model} = require("sequelize");
const {
  SwitchType
} = require('../lib/enum')

const {
  sequelize
} = require("../core/db")

class Turn extends Model {
  static async getTurn() {
    const result = await Turn.findAll()
    return result[0].dataValues.turn
  }

  static async ChangeTurn() {
    const data = await Turn.findAll()
    if(data[0].dataValues.turn === SwitchType.OPEN) {
      Turn.update({
        turn: SwitchType.CLOSE
      }, {
        where: {
          turn: SwitchType.OPEN
        }
      })
      return true
    }
    Turn.update({
      turn: SwitchType.OPEN
    }, {
      where: {
        turn: SwitchType.CLOSE
      }
    })
    return  true
  }

  toJSON() {
    return {
      turn: this.getDataValue('turn') 
    }
  }
}

Turn.init({
  turn: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  tableName: 'switch'
})

module.exports = {
  Turn
}