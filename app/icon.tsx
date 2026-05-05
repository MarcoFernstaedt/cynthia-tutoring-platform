import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4006A 0%, #E8008A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 11,
            height: 11,
            borderRadius: '50%',
            background: '#D4A017',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
