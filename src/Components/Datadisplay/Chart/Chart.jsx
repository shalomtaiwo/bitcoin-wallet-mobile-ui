import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer, Dot } from 'recharts';
import Status from '../Status/Status';
import Text from '../../Typography/Text/Text';



const CustomizedDot = (props) => {
  const { cx, cy, stroke, value, data } = props;

  // Customize the appearance of the last dot here
  if (value[1] === data[data.length - 1].btc) {
    return (
      <g>
        <Dot cx={cx} cy={cy} r={10} fill={"rgb(255, 204, 0, 0.4)"} strokeWidth={1} />
        <Dot cx={cx} cy={cy} r={6} fill={stroke} strokeWidth={2} />
        {/* Add any additional elements or text you want to display near the dot */}
        <text x={cx} y={cy - 10} fill="#333" textAnchor="middle">
          {value}
        </text>
      </g>
    );
  }
  return null;
};

const Chart = (props) => {
  return (
    <>
      <div style={{ marginTop: '30px' }}>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            width={"100%"}
            height={400}
            data={props.data}
            margin={{
              top: 8,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                <stop offset="30%" stopColor="#f12711" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#f5af19" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area label={false} dot={<CustomizedDot data={props.data} />} place type="natural" dataKey="btc" strokeWidth={3} stroke="url(#colorUv)" fill="#fff7ee" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div style={{ margin: '-48px 0 0 10px', zIndex: '9999 !important', position: 'relative' }}>
        <Status variant={'warning'} text={<Text size={12.84} space={-0.5}>1 BTC = $5.483</Text>} />
      </div>
    </>
  );
}

Chart.propTypes = {
  data: PropTypes.array,
};

export default Chart;


