import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Saguaro Blossoms Learning — Online Tutoring for Every Learner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#FFFBF0',
          position: 'relative',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        {/* Left accent stripe */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: 'linear-gradient(180deg, #D4006A 0%, #D4A017 100%)',
          }}
        />

        {/* Main content column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '56px 72px 56px 80px',
            flex: 1,
          }}
        >
          {/* Eyebrow row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#D4006A',
              }}
            />
            <span
              style={{
                fontSize: 14,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3A3A3A',
              }}
            >
              Yuma, Arizona · Virtual Sessions Worldwide
            </span>
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 68,
              color: '#0D0D0D',
              lineHeight: 1.08,
              marginBottom: 6,
              fontWeight: 400,
            }}
          >
            Saguaro Blossoms
          </div>
          <div
            style={{
              fontSize: 50,
              color: '#D4006A',
              lineHeight: 1.08,
              marginBottom: 28,
              fontStyle: 'italic',
            }}
          >
            Learning
          </div>

          {/* Tagline with gold left border */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              borderLeft: '3px solid #F0C84A',
              paddingLeft: 18,
              marginBottom: 36,
            }}
          >
            <span
              style={{
                fontSize: 21,
                fontStyle: 'italic',
                color: '#3A3A3A',
                lineHeight: 1.55,
                maxWidth: 560,
              }}
            >
              Where every learner blossoms at their own pace.
            </span>
          </div>

          {/* Service pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Reading', 'Writing', 'ESL', 'Homeschool', 'Adult Learning', 'AZ ESA'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '7px 16px',
                  borderRadius: 100,
                  background: '#FFF0F7',
                  border: '1px solid #FFE0EF',
                  fontSize: 14,
                  color: '#D4006A',
                  fontStyle: 'normal',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right decorative panel */}
        <div
          style={{
            width: 260,
            background: '#FFF0F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {/* Bloom circle */}
          <div
            style={{
              width: 190,
              height: 190,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D4006A 0%, #E8008A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                background: '#D4A017',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  color: 'white',
                  fontSize: 11,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                Every{'\n'}voice
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
