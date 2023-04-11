// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-foo',
            value: 'bar',
          },
        ],
      },
    ];
  },
};

module.exports = withNx(nextConfig);