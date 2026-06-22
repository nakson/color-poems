import Grid from '@mui/material/Grid2';
import type { ColorPoem } from '../data/colors';
import type { CardSurface } from '../types/cardSurface';
import ColorCard from './ColorCard';

interface ColorGridProps {
  items: ColorPoem[];
  cardSurface: CardSurface;
}

export default function ColorGrid({ items, cardSurface }: ColorGridProps) {
  return (
    <Grid container spacing={2.5}>
      {items.map((color) => (
        <Grid key={color.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ColorCard color={color} cardSurface={cardSurface} />
        </Grid>
      ))}
    </Grid>
  );
}
