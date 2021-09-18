import * as React from 'react';
import Box from '@mui/material/Box'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Summary() {
    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                    minWidth: 300,
                    flexGrow: 1,
                    flexDirection: 'row',
                }}
            >
                <Box sx={{ color: 'text.secondary' }}>Weekly Summary</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                    100 lb of Carbon
                </Box>
                <TrendingUpIcon
                    sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
                />
                <Box
                    sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'medium',
                    mx: 0.5,
                    }}
                >
                    10%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                    improved vs. annual average
                </Box>
            </Box>
        </React.Fragment>
    )
}