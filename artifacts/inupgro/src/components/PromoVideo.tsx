import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

const videoSrc = `${import.meta.env.BASE_URL}videos/inupgro-promo.mp4`;
const posterSrc = `${import.meta.env.BASE_URL}videos/inupgro-promo-poster.jpg`;

export function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // Lazy autoplay: only start (and load) the video when it scrolls into view
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <div ref={containerRef} className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10 group">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="w-full aspect-video object-cover bg-[#0a1930]"
        data-testid="promo-video"
      />

      {/* Play overlay shown before the video starts */}
      {!playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play().catch(() => {})}
          aria-label="Play video"
          data-testid="promo-video-play"
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
        >
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-xl shadow-black/30 hover:scale-105 transition-transform">
            <Play className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-current" />
          </span>
        </button>
      )}

      {/* Mute / unmute affordance */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        data-testid="promo-video-mute"
        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-sm text-white text-xs font-semibold transition-colors"
      >
        {muted ? (
          <>
            <VolumeX className="w-4 h-4" /> Tap for sound
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" /> Mute
          </>
        )}
      </button>
    </div>
  );
}
