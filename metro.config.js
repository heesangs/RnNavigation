const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const os = require('os');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  maxWorkers: os.availableParallelism ? os.availableParallelism() : os.cpus().length,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
