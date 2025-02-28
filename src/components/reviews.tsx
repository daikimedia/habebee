'use client'
import { useEffect, useRef } from 'react'

export default function Reviews() {
  const widgetContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.trustmary.com/BO6-vI-r1'
    script.async = true
    if (widgetContainer.current) {
      widgetContainer.current.appendChild(script)
    }

    return () => {
      if (widgetContainer.current) {
        while (widgetContainer.current.firstChild) {
          widgetContainer.current.removeChild(widgetContainer.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <section className="px-8 py-16 bg-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white   text-4xl font-bold text-center">Customer Reviews</h2>
        <div ref={widgetContainer} id="trustmary-widget" className="mt-8"></div>
      </div>
    </section>
  )
}