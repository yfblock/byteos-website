/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // webpack: (config, { isServer }) => {
    //     config.experiments = {
    //         asyncWebAssembly: true,
    //     };
    //     config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
    //     return config;
    // },
}

module.exports = nextConfig