import {
  MediaPlayButton,
  MediaTooltip,
  MediaMuteButton,
  MediaVolumeSlider,
  MediaSliderValue,
  MediaTimeSlider,
  MediaFullscreenButton,
  MediaMenu,
  MediaMenuButton,
  MediaMenuItems,
} from "@vidstack/react";
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaRotateLeft,
  FaVolumeXmark,
  FaVolumeLow,
  FaVolumeHigh,
  FaMinimize,
  FaGear,
} from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";

export default function VideoPlayerControls(props: any) {
  return (
    <div
      className="opacity-0 can-control:opacity-100 pointer-events-none absolute inset-0 z-10 flex h-full flex-col justify-between text-white transition-opacity duration-200 ease-linear"
      role="group"
      aria-label="Media Controls"
    >
      <MediaControlGroup>
        <h1 className="text-xl font-bold p-4">{props.title}</h1>
      </MediaControlGroup>
      <MediaControlGroup className="flex relative">
        <MediaPlayButton
          className="group flex h-12 w-12 items-center justify-center rounded-sm text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
          aria-keyshortcuts="k Space"
        >
          <FaPlay className="paused:block ended:hidden hidden hover:fill-orange-400"></FaPlay>
          <FaPause className="not-paused:block hidden hover:fill-orange-400"></FaPause>
          <FaRotateLeft className="ended:block hidden hover:fill-orange-400"></FaRotateLeft>
          <MediaTooltip
            className="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
            style={{ transformOrigin: "50% 100%" }}
          >
            <span className="paused:inline hidden">Play</span>
            <span className="not-paused:inline hidden">Pause</span>
          </MediaTooltip>
        </MediaPlayButton>
        <MediaMuteButton
          className="group/button flex h-12 w-12 items-center justify-center rounded-sm text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
          aria-keyshortcuts="m"
        >
          {/* icons */}
          <FaVolumeXmark className="absolute hidden group-data-[volume=muted]/button:block hover:fill-orange-400" />
          <FaVolumeLow className="absolute hidden group-data-[volume=low]/button:block hover:fill-orange-400" />
          <FaVolumeHigh className="absolute hidden group-data-[volume=high]/button:block hover:fill-orange-400" />
          {/* tooltip */}
          <MediaTooltip
            className="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]/button:-translate-x-1/2 group-data-[hocus]/button:scale-100 group-data-[hocus]/button:opacity-100"
            style={{ transformOrigin: "50% 100%" }}
          >
            <span className="not-muted:inline hidden">Mute</span>
            <span className="muted:inline hidden">Unmute</span>
          </MediaTooltip>
          <MediaVolumeSlider
            className="group/slider relative left bottom-14 my-2.5 flex w-12 h-0 items-center group-hover/button:h-16 transition-all align-bottom duration-200 ease-in-out"
            trackClass="absolute bottom-0 left-1/2 z-0 h-full !w-1 -translate-x-1/2 bg-[#5a595a] outline-none group-data-[focus]/slider:ring-4 group-data-[focus]/slider:ring-blue-400"
            trackFillClass="absolute bottom-0 left-1/2 z-20 !w-1 h-[var(--slider-fill-percent)] -translate-x-1/2 bg-orange-400 will-change-[height]"
            thumbContainerClass="absolute !bottom-[var(--slider-fill-percent)] !left-1/2 z-20 w-full h-5 -translate-x-1/2 !group-data-[dragging]/slider:bottom-[var(--slider-pointer-percent)]"
            thumbClass="absolute bottom-0 !left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white hover:bg-orange-300 opacity-0 transition-opacity duration-150 ease-in group-data-[interactive]/slider:opacity-100"
            aria-orientation="vertical"
          >
            <div
              className="absolute !bottom-[var(--preview-bottom)] left-full flex translate-y-1/2 items-center justify-center rounded-sm bg-black px-1 py-px text-white/80 opacity-0 transition-opacity duration-200 ease-out !group-data-[interactive]:opacity-100 !group-data-[interactive]:ease-in"
              slot="preview"
            >
              <MediaSliderValue type="pointer" format="percent" />
            </div>
          </MediaVolumeSlider>
        </MediaMuteButton>
        <MediaTimeSlider
          className="relative group mx-2.5 flex h-12 w-full items-center hover:cursor-pointer"
          trackClass="absolute left-0 z-0 h-1 w-full -translate-y-1/2 bg-[#5a595a] outline-none group-data-[focus]:ring-4 group-data-[focus]:ring-blue-400"
          trackFillClass="live:bg-red-500 absolute left-0 z-20 h-1 w-[var(--slider-fill-percent)] -translate-y-1/2 bg-orange-400 will-change-[width]"
          trackProgressClass="absolute left-0 z-10 h-1 w-[var(--media-buffered-percent)] -translate-y-1/2 bg-[#878787] will-change-[width]"
          thumbContainerClass="absolute left-[var(--slider-fill-percent)] z-20 h-full w-5 -translate-x-1/2 group-data-[dragging]:left-[var(--slider-pointer-percent)]"
          thumbClass="absolute left-0 h-5 w-5 -translate-y-1/2 rounded-full bg-white hover:bg-orange-300 opacity-0 transition-opacity duration-150 ease-in group-data-[interactive]:opacity-100"
          chaptersClass="relative flex items-center w-full h-full"
          chapterContainerClass="flex items-center w-[var(--width)] h-full mr-0.5 last:mr-0"
          chapterClass="relative flex items-center w-full h-1"
        >
          <div
            className="absolute bottom-full left-[var(--preview-left)] flex -translate-x-1/2 items-center justify-center rounded-sm bg-black px-1 py-px text-white/80 opacity-0 transition-opacity duration-200 ease-out group-data-[interactive]:opacity-100 group-data-[interactive]:ease-in"
            slot="preview"
          >
            <MediaSliderValue type="pointer" format="time" />
          </div>
        </MediaTimeSlider>
        <div className="ml-auto flex-none">
          <SettingsMenu />
          <MediaFullscreenButton className="group flex float-right h-12 w-12 items-center justify-center rounded-sm text-white hover:text-orange-400 outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400">
            {/* icons */}
            <FaExpand className="not-fullscreen:block hidden" />
            <FaMinimize className="fullscreen:block hidden" />
            {/* tooltip */}
            <MediaTooltip
              className="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
              style={{ transformOrigin: "50% 100%" }}
            >
              <span className="not-fullscreen:inline hidden">
                Enter Fullscreen
              </span>
              <span className="fullscreen:inline hidden">Exit Fullscreen</span>
            </MediaTooltip>
          </MediaFullscreenButton>
        </div>
      </MediaControlGroup>
    </div>
  );
}

function MediaControlGroup({ children }: any) {
  return (
    <div className="can-control:pointer-events-auto pointer-events-none flex min-h-[48px] w-full p-2">
      {children}
    </div>
  );
}

function SettingsMenu() {
  return (
    <MediaMenu className="relative inline-block">
      <MediaMenuButton
        className="group flex h-12 w-12 items-center justify-center rounded-sm outline-none"
        aria-label="Settings"
      >
        <FaGear className="rounded-sm transition-transform duration-200 ease-out group-aria-expanded:rotate-90 group-data-[focus]:ring-4 group-data-[focus]:ring-blue-400 hover:fill-orange-400" />
      </MediaMenuButton>
      <MediaTooltip
        className="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
        style={{ transformOrigin: "50% 100%" }}
      >
        <span slot="open" className="inline open:hidden">
          Open Settings
        </span>
        <span slot="close" className="hidden open:inline">
          Close Settings
        </span>
      </MediaTooltip>
      <MediaMenuItems className="absolute right-0 bottom-full h-[var(--menu-height)] min-w-[260px] overflow-y-auto rounded-lg bg-black/95 p-2.5 shadow-sm backdrop-blur-sm transition-all duration-200 ease-in aria-hidden:pointer-events-none aria-hidden:bottom-0 aria-hidden:opacity-0 data-[resizing]:overflow-hidden">
        <Submenu label="Speed" hint="Normal">
          {/* Options here... */}
        </Submenu>
      </MediaMenuItems>
    </MediaMenu>
  );
}

function Submenu({ children, ...buttonProps }: any) {
  return (
    <MediaMenu className="text-sm text-white">
      <SubmenuButton {...buttonProps} />
      <MediaMenuItems className="relative flex flex-col p-1 aria-hidden:hidden">
        {children}
      </MediaMenuItems>
    </MediaMenu>
  );
}

function SubmenuButton({ label, hint }: any) {
  return (
    <MediaMenuButton className="group flex cursor-pointer items-center p-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-2 data-[focus]:ring-blue-400">
      <FaArrowLeft className="hidden h-4 w-4 group-aria-expanded:inline" />
      <MdOutlineSpeed className="h-6 w-6 group-aria-expanded:hidden" />
      <span className="ml-1.5">{label}</span>
      <span className="ml-auto text-white/50">{hint}</span>
      <FaArrowRight className="ml-0.5 h-4 w-4 text-white/50 group-aria-expanded:hidden" />
    </MediaMenuButton>
  );
}
