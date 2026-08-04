import { useEffect, useRef } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  imageSrc?: string
  videoSrc?: string
}

export default function PageHero({ eyebrow, title, description, imageSrc, videoSrc }: PageHeroProps) {
  const hasMedia = Boolean(imageSrc || videoSrc)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6
    }
  }, [videoSrc])

  return (
    <section className="relative overflow-hidden bg-ink-950 px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : imageSrc ? (
        <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : null}
      {hasMedia && (
        <div className={`absolute inset-0 ${videoSrc ? 'bg-ink-950/35' : 'bg-ink-950/70'}`} />
      )}

      <div className="relative mx-auto max-w-7xl">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-clay-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-paper-50 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper-100/80">
          {description}
        </p>
      </div>
    </section>
  )
}
