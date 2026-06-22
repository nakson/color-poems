import { Box } from '@mui/material';
import { useState } from 'react';

interface PosterAreaProps {
  id: number;
  hex: string;
  pairings: string[];
}

/** 右侧长条海报区：图片优先，失败则 CSS 渐变回退 */
export default function PosterArea({ id, hex, pairings }: PosterAreaProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [tryPng, setTryPng] = useState(false);

  const posterSrc = tryPng
    ? `${import.meta.env.BASE_URL}posters/${id}.png`
    : `${import.meta.env.BASE_URL}posters/${id}.webp`;

  const gradientFallback = {
    background: `
      linear-gradient(135deg, ${hex} 0%, ${pairings[0] ?? hex} 45%, ${pairings[1] ?? hex} 100%),
      radial-gradient(circle at 85% 15%, ${pairings[2] ?? hex}99 0%, transparent 55%)
    `,
    backgroundBlendMode: 'multiply, normal' as const,
  };

  const handleImgError = () => {
    if (!tryPng) {
      setTryPng(true);
      return;
    }
    setImgFailed(true);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 110,
        borderRadius: 1,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        aspectRatio: '5 / 2',
        ...(!imgFailed ? {} : gradientFallback),
      }}
    >
      {!imgFailed && (
        <Box
          component="img"
          src={posterSrc}
          alt=""
          onError={handleImgError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </Box>
  );
}
