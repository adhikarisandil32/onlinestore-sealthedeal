import React from 'react'
import FooterColumn from './FooterColumn'

export default function Footer() {
  return (
    <div className="px-2 py-12 flex gap-4 justify-between">
      <FooterColumn />
      <FooterColumn />
      <FooterColumn />
    </div>
  )
}
