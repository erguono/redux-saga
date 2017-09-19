module.exports = {
  presets: [
    [
      'env',
      {
        // temporarily disabled because of babel/babel#6274
        // loose: true,
        modules: process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
        forceAllTransforms: process.env.NODE_ENV === 'production',
      },
    ],
    'react',
    'stage-2',
  ],
}
