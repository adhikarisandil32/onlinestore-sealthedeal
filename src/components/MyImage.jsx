import React, { useState } from 'react'

export default function MyImage({src}) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <img
      className={`w-full h-[200px] object-contain ${isLoading ? 'img-skeleton-loading' : ''}`}
      src={src}
      onLoad={() => {
        setIsLoading(false)
      }}
    />
  )
}
