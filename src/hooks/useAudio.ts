import { useRef, useCallback, useEffect } from "react";

interface UseAudioOptions {
  volume?: number;
  preload?: boolean;
}

export const useAudio = (src: string, options: UseAudioOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume = 0.5, preload = true } = options;

  // Initialize audio element only on client side
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.preload = preload ? "auto" : "none";
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.load(); // Reset the audio element
        audioRef.current = null;
      }
    };
  }, [src, volume, preload]);

  const play = useCallback(() => {
    if (audioRef.current) {
      // Reset audio to beginning in case it's already playing
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  }, []);

  return {
    play,
    pause,
    setVolume,
    audio: audioRef.current,
  };
};
