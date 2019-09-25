module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AnotherReactLib',
      externals: {
        react: 'React'
      }
    }
  }
}
