import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  Box,
  Chip,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import ColorGrid from './components/ColorGrid';
import { categories, colors } from './data/colors';
import type { CardSurface } from './types/cardSurface';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cardSurface, setCardSurface] = useState<CardSurface>('light');

  const filtered = useMemo(
    () => (activeCategory ? colors.filter((c) => c.category === activeCategory) : colors),
    [activeCategory],
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: { xs: 3, md: 5 } }}>
      <Container maxWidth="xl">
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            gap={2}
          >
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                Color Poems
              </Typography>
              <Typography variant="body1" color="text.secondary">
                63 个万能调色美术公式 · 配色灵感库
              </Typography>
            </Box>

            <ToggleButtonGroup
              value={cardSurface}
              exclusive
              onChange={(_, value: CardSurface | null) => {
                if (value) setCardSurface(value);
              }}
              size="small"
              aria-label="卡片背景色"
            >
              <ToggleButton value="light" aria-label="白色卡片">
                <LightModeIcon sx={{ fontSize: 18, mr: 0.5 }} />
                白卡
              </ToggleButton>
              <ToggleButton value="dark" aria-label="黑色卡片">
                <DarkModeIcon sx={{ fontSize: 18, mr: 0.5 }} />
                黑卡
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            <Chip
              label="全部"
              onClick={() => setActiveCategory(null)}
              color={activeCategory === null ? 'primary' : 'default'}
              variant={activeCategory === null ? 'filled' : 'outlined'}
            />
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                color={activeCategory === cat ? 'primary' : 'default'}
                variant={activeCategory === cat ? 'filled' : 'outlined'}
                sx={{ maxWidth: '100%' }}
              />
            ))}
          </Stack>

          <Typography variant="caption" color="text.secondary">
            共 {filtered.length} 色
          </Typography>
        </Stack>

        <ColorGrid items={filtered} cardSurface={cardSurface} />
      </Container>
    </Box>
  );
}
