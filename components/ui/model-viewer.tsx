'use client';

import React, { FC } from "react";

export interface ViewerProps {
  url?: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const ModelViewer: FC<ViewerProps> = ({
  width = 400,
  height = 400,
  placeholderSrc,
}) => {
  return (
    <div
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
      }}
      className="relative bg-muted border border-border rounded-lg flex items-center justify-center"
    >
      <div className="text-center">
        {placeholderSrc ? (
          <div className="w-16 h-16 mx-auto mb-4">
            <img
              src={placeholderSrc}
              alt="3D Model Placeholder"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        )}
        <p className="text-sm text-muted-foreground">3D Model Viewer</p>
        <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
      </div>
    </div>
  );
};

export default ModelViewer;
