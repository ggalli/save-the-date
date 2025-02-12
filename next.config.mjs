/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'buydjdeppyalzjlxouiw.supabase.co',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
