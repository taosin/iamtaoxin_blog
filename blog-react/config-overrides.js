/*
 * @Author: iMocco
 * @Date:   2018-10-27 13:08:20
 * @Last Modified by:   iMocco
 * @Last Modified time: 2018-10-27 13:14:46
 */
// 修改默认配置
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
	config = injectBabelPlugin(
		['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
		config, );
	return config;
};