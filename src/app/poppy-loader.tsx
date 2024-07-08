'use client'

import { useLottie } from 'lottie-react'

export default function PoppyLoader() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: '../../public/poppy-loading-data.json',
  }
  const { View } = useLottie(options)

  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      <div className="lottie">{View}</div>
    </div>
  )
}
