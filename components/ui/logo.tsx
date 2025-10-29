import * as React from "react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative font-serif">
        <span className="text-3xl tracking-wide" style={{ 
          background: 'linear-gradient(135deg, #C7A14B 0%, #E5C57C 50%, #C7A14B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(199, 161, 75, 0.2)'
        }}>
          RdMoment
        </span>
        <span 
          className="absolute -bottom-1 left-0 w-full"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #C7A14B, transparent)',
            opacity: 0.6
          }}
        />
      </div>
    </Link>
  )
}