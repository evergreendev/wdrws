

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source: '/api/:path*',
                destination: "https://cms.wdrws.org/wp-json/wp/v2/:path*"
            }
        ]
    }
};

export default nextConfig;
