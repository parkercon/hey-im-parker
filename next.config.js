/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    webpack: (config, { isServer }) => {
        // Add the file-loader rule for PDF files
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/_next/static/files',
                outputPath: 'static/files',
              },
            },
          ],
        });
    
        return config;
      }
}

module.exports = nextConfig
