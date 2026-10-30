import { useRef, useCallback, useEffect } from "react";

interface UseAudioOptions {
  volume?: number;
}

/**
 * Plays a short sound effect. The file is only fetched on the first play(),
 * so sound effects never compete with the initial page load.
 */
export const useAudio = (src: string, { volume = 0.5 }: UseAudioOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, [src]);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }
    const audio = audioRef.current;
    audio.volume = volume;
    // Restart in case it's already playing
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Silently handle autoplay restrictions
    });
  }, [src, volume]);

  return { play };
};
