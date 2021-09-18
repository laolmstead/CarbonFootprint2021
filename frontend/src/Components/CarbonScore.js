import * as React from 'react';
import Typography from '@mui/material/Typography'
import {Title} from './Title'
import { Divider } from '@mui/material';
import Box from '@mui/material/Box'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



export default function Score() {
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
                <Box sx={{ color: 'text.secondary' }}>Carbon Score</Box>
                <Box sx={{ 
                        color: 'text.primary', 
                        fontSize: 34, 
                        fontWeight: 'medium', 
                        bgcolor: 'success.dark',
                        borderRadius: 1,
                        boxShadow: 1,
                    }}>
                    150
                </Box>
                <Box
                    sx={{
                    display: 'inline',
                    fontWeight: 'medium',
                    mx: 0.5,
                    }}
                >
                    20%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                    better vs. annual average
                </Box>
            </Box>
        </React.Fragment>
    )
}