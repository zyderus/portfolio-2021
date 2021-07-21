import { useEffect, useState, useRef, RefObject } from 'react'

const useObserver = (options: any) => {
  const ref: any = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
  }

  useEffect(() => {
    const { current: refCurrent } = ref

    const observer = new IntersectionObserver(callback, options)
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (refCurrent) observer.disconnect()
    }
  }, [ref, options])

  return [ref, isVisible]
}

export default useObserver
