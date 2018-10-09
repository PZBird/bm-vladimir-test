/**
 * схема options (варианты ответов)
 *  {} @pollId - идентификатор связанного опроса
 *  string @value - значение поля
 *  int @votes - список проголосовавших пользователей
 */

const mongoose = require('mongoose')
const { extend } = require('lodash')

const { is } = require('./utils')
const ObjectId = mongoose.Schema.Types.ObjectId

const model = new mongoose.Schema(extend({
  pollId: { type: ObjectId, ref: 'Post' }, // _id опроса
  value: { type: String, required: true }, // значение поля
  //
  votes: [{ type: Number }] // список проголосовавших юзеров
}, is))

model.index({ 'pollId': 1 })

module.exports = mongoose.model('PollOption', model)
