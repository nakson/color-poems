import { Box, Stack, Typography } from '@mui/material';
import { mono, serif } from '../theme';
import { getContrastText } from '../utils/colorContrast';
import CopyHexButton from './CopyHexButton';

interface HeroColorBlockProps {
  name: string;
  hex: string;
  mood: string;
}

/** 全宽主色 Hero 区：色名、Hex、复制、氛围描述叠在色块上 */
export default function HeroColorBlock({ name, hex, mood }: HeroColorBlockProps) {
  const textColor = getContrastText(hex);
  const isLightText = textColor === '#FFFFFF';

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 152,
        borderRadius: 2,
        bgcolor: hex,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Stack spacing={0.75}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: serif,
              fontWeight: 600,
              color: textColor,
              fontSize: '1.15rem',
            }}
          >
            {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: mono,
                fontWeight: 600,
                color: textColor,
                letterSpacing: '0.04em',
              }}
            >
              {hex}
            </Typography>
            <CopyHexButton
              hex={hex}
              color={textColor}
              bgColor={isLightText ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
            />
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: textColor,
            opacity: 0.92,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.7,
          }}
        >
          {mood}
        </Typography>
      </Stack>
    </Box>
  );
}
