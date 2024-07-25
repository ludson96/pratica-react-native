const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

// Obter a configuração padrão do Expo
const config = getDefaultConfig(__dirname);

// Adicionar configuração para resolver caminhos absolutos
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    '@': path.resolve('.'), // Resolve a partir do diretório atual
  },
};

module.exports = withNativeWind(config, { input: './global.css' });
