'use client';

import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: '#6366f1',
          mb: 3,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
