'use client'

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between">
        <div className="font-bold text-lg text-blue-600">마음콩</div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="hidden sm:block px-3 py-1 border rounded-md text-sm w-64"
        />
        <div className="flex items-center gap-4 text-gray-600">
          <span>🔔</span>
          <span>💬</span>
          <span>⚙️</span>
        </div>
      </div>
    </header>
  )
}
