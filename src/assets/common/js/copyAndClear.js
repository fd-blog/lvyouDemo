export function copyAndClear (obj) {
  let stringifyMore = (obj) => {
    /* eslint-disable no-trailing-spaces */
    var s = JSON.stringify(obj, function (key, val) {  
      if (typeof val === 'function') {
        return val + ''
      }
      return val
    })
    return s
  }
  let parseMore = (s) => {
    return JSON.parse(s, function (k, v) {
      if (v != null && v.indexOf && v.indexOf('function') > -1) {
        /* eslint-disable no-eval */
        return eval('(function(){return ' + v + ' })()')
      }
      return v
    })
  }
  return parseMore(stringifyMore(obj))
}
