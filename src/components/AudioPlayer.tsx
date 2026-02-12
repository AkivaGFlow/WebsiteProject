"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// TODO: Replace with real 45-60 second sample call recording
const PLACEHOLDER_SRC = "/sample-call.mp3";

interface AudioPlayerProps {
  src?: string;
  onProgress?: (status: "complete") => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({
  src = PLACEHOLDER_SRC,
  onProgress,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);
  const draggingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<1 | 1.25>(1);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function onLoadedMetadata() {
      setDuration(audio!.duration);
    }
    function onTimeUpdate() {
      setCurrentTime(audio!.currentTime);
    }
    function onEnded() {
      setPlaying(false);
    }

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  // Fire onProgress when >75% listened
  useEffect(() => {
    if (
      !firedRef.current &&
      duration > 0 &&
      currentTime / duration > 0.75 &&
      onProgress
    ) {
      firedRef.current = true;
      onProgress("complete");
    }
  }, [currentTime, duration, onProgress]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  const toggleSpeed = useCallback(
    (newSpeed: 1 | 1.25) => {
      setSpeed(newSpeed);
      if (audioRef.current) {
        audioRef.current.playbackRate = newSpeed;
      }
    },
    []
  );

  const seekTo = useCallback(
    (clientX: number) => {
      const bar = progressRef.current;
      const audio = audioRef.current;
      if (!bar || !audio || duration === 0) return;

      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      audio.currentTime = ratio * duration;
      setCurrentTime(audio.currentTime);
    },
    [duration]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      seekTo(e.clientX);
    },
    [seekTo]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (draggingRef.current) {
        seekTo(e.clientX);
      }
    },
    [seekTo]
  );

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const audio = audioRef.current;
      if (!audio || duration === 0) return;
      const step = duration * 0.05;
      if (e.key === "ArrowRight") {
        audio.currentTime = Math.min(duration, audio.currentTime + step);
      } else if (e.key === "ArrowLeft") {
        audio.currentTime = Math.max(0, audio.currentTime - step);
      }
    },
    [duration]
  );

  return (
    <div>
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-[12px]">
        {/* Play/pause button */}
        <button
          type="button"
          aria-label={playing ? "Pause" : "Play sample call"}
          onClick={togglePlay}
          className="flex-shrink-0 w-[48px] h-[48px] min-h-[48px] rounded-full bg-[#1B6B4A] hover:bg-[#155A3E] flex items-center justify-center cursor-pointer"
        >
          {playing ? (
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              aria-hidden="true"
            >
              <rect x="1" y="0" width="4" height="20" rx="1" fill="white" />
              <rect x="11" y="0" width="4" height="20" rx="1" fill="white" />
            </svg>
          ) : (
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M0 0L18 10L0 20V0Z" fill="white" />
            </svg>
          )}
        </button>

        {/* Progress bar + time + speed */}
        <div className="flex-1 flex flex-col gap-[6px]">
          <div
            ref={progressRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            role="slider"
            aria-label="Seek audio"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="h-[24px] flex items-center cursor-pointer touch-none"
          >
            <div className="h-[4px] w-full rounded-full bg-[#E2E4E9] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#1B6B4A] transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#6B6B82]">
              {formatTime(currentTime)} / {formatTime(duration || 54)}
            </span>
            <div className="flex gap-[6px]">
              <button
                type="button"
                aria-label="Playback speed 1x"
                onClick={() => toggleSpeed(1)}
                className={`text-[12px] border rounded-full min-h-[28px] min-w-[36px] px-[8px] cursor-pointer bg-white ${
                  speed === 1
                    ? "text-[#1A1A2E] border-[#1A1A2E] font-medium"
                    : "text-[#6B6B82] border-[#E2E4E9]"
                }`}
              >
                1x
              </button>
              <button
                type="button"
                aria-label="Playback speed 1.25x"
                onClick={() => toggleSpeed(1.25)}
                className={`text-[12px] border rounded-full min-h-[28px] min-w-[44px] px-[8px] cursor-pointer bg-white ${
                  speed === 1.25
                    ? "text-[#1A1A2E] border-[#1A1A2E] font-medium"
                    : "text-[#6B6B82] border-[#E2E4E9]"
                }`}
              >
                1.25x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
