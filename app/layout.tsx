import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'

export const metadata: Metadata = {
  title: {
    default: '마음콩',
    template: '%s | 마음콩',
  },
  description: 'AI 감정 분석 기반 공감 일기 서비스',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full overflow-hidden bg-gray-50 text-gray-800">
        <Providers>
          <div className="h-full overflow-y-auto scroll-smooth">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
