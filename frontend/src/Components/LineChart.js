import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import {Title} from './Title'
import Box from '@mui/material/Box'

function createData(time, carbon){
    return {time, carbon };
}

const data = [
    createData('Jan', 0),
    createData('Feb', 300),
    createData('Mar', 600),
    createData('Apr', 800),
    createData('May', 1500),
    createData('Jun', 2000),
    createData('Jul', 2400),
    createData('Aug', 2400),
    createData('Sept', 2500),
    createData('Oct', undefined),
    createData('Nov', undefined),
    createData('Dec', undefined),
  ];
  
  export function CarbonLineChart() {
    const theme = useTheme();
  
    return (
      <React.Fragment>
        <Box
          sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 210,
          }}
        >
          <Title>Yearly Trend</Title>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis
                dataKey="time"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              />
              <YAxis
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              >
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: 'middle',
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1,
                  }}
                >
                  Carbon (lbs)
                </Label>
              </YAxis>
              <Line
                isAnimationActive={false}
                type="monotone"
                dataKey="carbon"
                stroke={theme.palette.primary.main}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </React.Fragment>
    );
  }