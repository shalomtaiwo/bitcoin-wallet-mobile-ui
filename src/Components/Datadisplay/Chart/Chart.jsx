import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer, Customized } from 'recharts';
import Status from '../Status/Status';
import Text from '../../Typography/Text/Text';



const CustomizedDot = (props) => {
  const { cx, cy, value } = props;

  if (value > 2300) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
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
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip />
            <Area dot={<CustomizedDot />} type="natural" dataKey="btc" strokeWidth={3} stroke="#ffc13e" fill="#fff7ee" />
            <Customized component={CustomizedDot} />
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


