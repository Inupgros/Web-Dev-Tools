import { useEffect, useRef } from 'react';

import { useVideoPlayer } from '@/lib/video';
import { AnimatePresence, motion } from 'framer-motion';

import { Scene0 } from './video_scenes/Scene0';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS: Record<string, number> = {
  hook: 4500,
  invisible: 4500,
  solution: 5500,
  portfolio: 5000,
  pricing: 5500,
  cta: 6000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  hook: Scene0,
  invisible: Scene1,
  solution: Scene2,
  portfolio: Scene3,
  pricing: Scene4,
  cta: Scene5,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-brand-navy">
      {/* Background gradients that persist across scenes */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        animate={{
          background:
            sceneIndex >= 2
              ? 'radial-gradient(circle at 70% 30%, hsl(38 92% 50% / 0.4), transparent 60%)'
              : 'radial-gradient(circle at 30% 70%, hsl(210 73% 30% / 0.4), transparent 60%)',
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-0 left-0 h-[4px] bg-brand-gold z-50"
        initial={{ width: '0%' }}
        animate={{ width: `${(Math.max(sceneIndex, 0) / 5) * 100}%` }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      />

      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </div>
  );
}
