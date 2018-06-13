import AV from './leancloud'

export default function (user) {
  var {id,attributes:{username}} = user || AV.User.current() || {attributes:{}}
  return {
    id:id || '',
    name:name || ''
  }
}
