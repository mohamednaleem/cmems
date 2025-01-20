const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'interrogators',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },

      // For remotes (please adjust)
      name: 'interrogators',
      filename: 'remoteInterrogators.js',
      exposes: {
        './InterrogatorsComponent':
          './projects/interrogators/src/app/components/interrogators/interrogators.component.ts',
        './InterrogatorsDetailsComponent':
          './projects/interrogators/src/app/components/interrogators-details/interrogators_details.component.ts',
        './ConfigsComponent': './projects/interrogators/src/app/components/configs/configs.component.ts',
        './LogsComponent': './projects/interrogators/src/app/components/logs/logs.component.ts',
        './InfoComponent': './projects/interrogators/src/app/components/info/info.component.ts',
        './AppComponent': './projects/interrogators/src/app/app.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "cmems": "http://localhost:4200/remoteEntry.js",
      //     "patients": "http://localhost:4201/remoteEntry.js",

      // },

      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
