const {
  Sequelize
} = require('sequelize')

const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/index').database



const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host: host,
  port: port,
  loading: true,
  timezone: '+08:00',
  define: {
    timestamps: false,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,//驼峰 转换成 下划线
    freezeTableName: true,
    scopes: {
      bh: {
        attributes: {
          exclude: ['updated_at', 'deleted_at', 'created_at']
        }
      }
    }
  }
})

sequelize.sync({
  force: false // 生产环境的时候不能为true,会把原来的表的记录删除掉，重新创表 
})

module.exports = {
  sequelize
}