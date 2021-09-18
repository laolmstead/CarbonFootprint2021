import * as React from 'react'
import { Typography } from '@mui/material';

export function Title(props) {
    return (
        <Typography component="h2" variant="h6" gutterBottom>
            {props.children}
        </Typography>
    );
}