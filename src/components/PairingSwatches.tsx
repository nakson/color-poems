import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { mono } from '../theme';
import { getContrastText } from '../utils/colorContrast';
import { copyToClipboard } from '../utils/copyToClipboard';

interface PairingSwatchesProps {
  pairings: string[];
}

/** 左侧搭配色：每行一条全宽色条，右侧显示 Hex，点击复制 */
export default function PairingSwatches({ pairings }: PairingSwatchesProps) {
  const handleCopy = async (hex: string) => {
    await copyToClipboard(hex);
  };

  return (
    <Stack spacing={0.75} sx={{ width: '100%', height: '100%' }}>
      {pairings.map((hex) => {
        const textColor = getContrastText(hex);
        return (
          <Tooltip key={hex} title={`${hex} · 点击复制`}>
            <Box
              onClick={() => handleCopy(hex)}
              sx={{
                width: '100%',
                height: 34,
                borderRadius: 1,
                bgcolor: hex,
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: 1,
                cursor: 'pointer',
                transition: 'transform 0.15s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: mono,
                  fontWeight: 600,
                  color: textColor,
                  fontSize: '0.7rem',
                }}
              >
                {hex}
              </Typography>
            </Box>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
