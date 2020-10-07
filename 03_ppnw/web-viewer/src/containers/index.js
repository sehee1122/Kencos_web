const req = require.context('.', false, /^((?!index).)*\.vue$/)

req.keys().forEach((key) => {
  const containerName = key.replace(/^\.\/([^.]+)\.vue$/, '$1')
  module.exports[containerName] = req(key).default
})
