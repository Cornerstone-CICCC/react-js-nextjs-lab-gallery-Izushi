'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.back()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [router, mounted])

  if (!mounted) {
    return null
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.back()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal