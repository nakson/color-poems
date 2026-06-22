import { alpha, Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import type { ColorPoem } from '../data/colors';
import type { CardSurface } from '../types/cardSurface';
import HeroColorBlock from './HeroColorBlock';
import PairingSwatches from './PairingSwatches';
import PosterArea from './PosterArea';

interface ColorCardProps {
  color: ColorPoem;
  cardSurface: CardSurface;
}

export default function ColorCard({ color, cardSurface }: ColorCardProps) {
  const isDark = cardSurface === 'dark';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: isDark ? '#121212' : '#FFFFFF',
        color: isDark ? '#F5F5F5' : 'text.primary',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, '&:last-child': { pb: 2 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'monospace',
              color: isDark ? '#B0B0B0' : 'text.secondary',
            }}
          >
            #{String(color.id).padStart(2, '0')}
          </Typography>
          <Chip
            label={color.category.split('/')[0]?.trim() ?? color.category}
            size="small"
            variant="outlined"
            sx={{
              maxWidth: 110,
              fontSize: '0.7rem',
              color: isDark ? '#E0E0E0' : 'text.secondary',
              borderColor: isDark ? alpha('#FFFFFF', 0.2) : 'divider',
            }}
          />
        </Stack>

        <HeroColorBlock name={color.name} hex={color.hex} mood={color.mood} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ alignItems: 'stretch', minHeight: 110 }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <PairingSwatches pairings={color.pairings} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex' }}>
            <PosterArea id={color.id} hex={color.hex} pairings={color.pairings} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
