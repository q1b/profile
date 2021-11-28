import type { Rive, RiveParameters } from 'rive-js';

export type UseRiveParameters = Partial<Omit<RiveParameters, 'canvas'>> | null;

export type RiveType = Rive | null 

export type UseRiveOptions = {
  useDevicePixelRatio: boolean;
  fitCanvasToArtboardHeight: boolean;
};

export type Dimensions = {
  width: number;
  height: number;
};

/**
 * @typedef RiveState
 * @property update - Function run everythime when params change .
 * @property destroy - When Instance get destryed .
 */
export type RiveState = {
  update: any,
  destroy: any,
};