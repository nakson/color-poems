import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { copyToClipboard } from '../utils/copyToClipboard';

interface CopyHexButtonProps {
  hex: string;
  color?: string;
  bgColor?: string;
}

export default function CopyHexButton({ hex, color, bgColor }: CopyHexButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(hex);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <Tooltip title={copied ? '已复制' : '复制'}>
      <IconButton
        size="small"
        onClick={handleCopy}
        aria-label="复制颜色"
        sx={{
          color: color ?? 'inherit',
          bgcolor: bgColor ?? 'rgba(0,0,0,0.12)',
          '&:hover': { bgcolor: bgColor ? `${bgColor}CC` : 'rgba(0,0,0,0.2)' },
        }}
      >
        <ContentCopyIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Tooltip>
  );
}
