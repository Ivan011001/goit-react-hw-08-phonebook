import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardLoading() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" height={140} />
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <Skeleton variant="rounded" height={90} />
    </Stack>
  );
}
