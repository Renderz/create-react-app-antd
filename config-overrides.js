const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#25b864',
        '@border-radius-base': '6px',
        "@font-size-base": '12px',
        '@line-height-base': '1.2'
      },
    },
  })
);
