/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'cms.wdrws.org',
            }
        ]
    }
};

export default nextConfig;
