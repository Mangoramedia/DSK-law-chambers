import React from 'react';

interface DSKLogoProps {
  className?: string;
  size?: number | string;
  maxHeight?: string | number;
  showTagline?: boolean;
}

export const DSK_LOGO_IMAGE_URL = "https://res.cloudinary.com/dyiwep5ls/image/upload/v1785408826/WhatsApp_Image_2026-07-28_at_12.24.08_PM_vrl0a4.jpg";

export const DSKLogo: React.FC<DSKLogoProps> = ({
  className = '',
  maxHeight = '64px',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src={DSK_LOGO_IMAGE_URL}
        alt="DSK Law Chambers Official Logo"
        className="max-h-[64px] h-auto w-auto object-contain rounded-full mix-blend-lighten filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
        style={{
          maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
