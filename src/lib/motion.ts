// Shared motion language for the whole site.
// Strong custom easing curves — the built-in CSS easings are too weak and read
// as generic. These give entrances a confident, intentional "snap".

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]; // strong ease-out (expo-ish)
export const EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1]; // strong ease-in-out
export const EASE_DRAWER: [number, number, number, number] = [0.32, 0.72, 0, 1]; // iOS drawer curve

// Reveals fire a touch before the element is fully on screen, so motion feels
// continuous as you scroll rather than "popping" in late.
export const VIEWPORT_ONCE = { once: true, margin: "-12% 0px -12% 0px" } as const;
export const VIEWPORT_REPEAT = { once: false, margin: "-12% 0px -12% 0px" } as const;

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export function directionOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}
