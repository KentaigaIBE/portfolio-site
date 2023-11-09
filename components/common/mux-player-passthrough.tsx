"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";

export default async function LazyMux(props: any) {
  const {
    className,
    title,
    metadataVideoId,
    metadataVideoTitle,
    streamType,
    playbackId,
    aspectRatio,
    thumbnailTime,
    placeholder,
    accentColor,
    primaryColor,
    secondaryColor,
    preload,
    autoPlay,
    muted,
    loop,
  } = props;

  return (
    <div className={className}>
      <MuxPlayer
        title={title}
        metadataVideoId={metadataVideoId}
        metadataVideoTitle={metadataVideoTitle}
        streamType={streamType}
        playbackId={playbackId}
        style={{ aspectRatio: aspectRatio }}
        thumbnailTime={thumbnailTime}
        placeholder={placeholder}
        accentColor={accentColor}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        preload={preload}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
      />
    </div>
  );
}
