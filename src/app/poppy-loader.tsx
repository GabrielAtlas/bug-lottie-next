'use client'

import Lottie from 'lottie-react'

import animationData from "./poppy-loading-data.json";

export default function PoppyLoader() {

  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      <h1>Loading...</h1>
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}
