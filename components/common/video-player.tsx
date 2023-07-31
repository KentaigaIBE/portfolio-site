import React from "react";
import { MediaPlayer, MediaOutlet } from "@vidstack/react";
import VideoPlayerControls from "./video-player-controls";
import { MediaErrorEvent } from "vidstack";

export default function VideoPlayer(props: any): React.JSX.Element {
  function SwitchToBackupSrc(e: MediaErrorEvent, backupFile: string): void {
    e.target.src = backupFile;
  }

  return (
    <MediaPlayer
      className={`relative + ${props.className}`}
      title={props.title}
      src={props.src}
      load={props.load}
      onError={(e) => SwitchToBackupSrc(e, props.backupSrc)}
      autoplay={props.autoplay}
      muted={props.muted}
      loop={props.loop}
    >
      <MediaOutlet />
      <VideoPlayerControls />
    </MediaPlayer>
  );
}
