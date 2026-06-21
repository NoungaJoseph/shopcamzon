import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProductModelViewerProps {
  className?: string;
}

/**
 * ProductModelViewer — Interactive 3D model viewer for the hero section.
 * 
 * Uses the Sketchfab embed iframe for the "Tripod Selfie Stick" model by designdaco.
 * This is a stock visual stand-in for the product category, not the exact branded product.
 * 
 * The model page: https://sketchfab.com/3d-models/tripod-selfie-stick-8448295c8fdb4630a004cfb875e483b8
 * License: Standard (not downloadable as GLB), so we embed via iframe.
 * Creator: designdaco
 * 
 * If a local .glb file becomes available in the future, swap the iframe for a <model-viewer> element.
 */
export const ProductModelViewer: React.FC<ProductModelViewerProps> = ({ className }) => {
  const { t } = useTranslation(['home']);

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          title={t('home:hero3d.modelAltText', 'Interactive 3D view of a selfie stick and tripod')}
          src="https://sketchfab.com/models/8448295c8fdb4630a004cfb875e483b8/embed?autostart=1&autospin=0.2&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_vr=0&transparent=1&preload=1&camera=0"
          className="absolute inset-x-0 border-none w-full pointer-events-auto"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          style={{ background: 'transparent', top: '-60px', height: 'calc(100% + 120px)' }}
        />
      </div>
    </div>
  );
};
