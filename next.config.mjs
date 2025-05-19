/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // GitHub Pages는 정적 파일만 서비스
  assetPrefix: '.',      // 라우트·정적 파일 경로 보정
  images: {              // v0 샘플 이미지 최적화 비활성화
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
