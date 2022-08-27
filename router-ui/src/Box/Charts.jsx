import React, { useRef, useEffect } from 'react';
import { init, getInstanceByDom } from 'echarts';


export const Charts = ({
	option,
	style,
	settings,
	loading,
}) => {
	const chartRef = useRef(null);

	useEffect(() => {
		// Initialize chart
		let chart;
		if (chartRef.current !== null) {
			chart = init(chartRef.current);
		}

		const resizeChart = () => chart?.resize();
		window.addEventListener('resize', resizeChart);

		// Return cleanup function
		return () => {
			chart?.dispose();
			window.removeEventListener('resize', resizeChart);
		};
	}, []);

	useEffect(() => {
		// Update chart
		if (chartRef.current !== null) {
			const chart = getInstanceByDom(chartRef.current);
			chart?.setOption(option, settings);
		}
	}, [option, settings]);

	useEffect(() => {
		if (chartRef.current !== null) {
			const chart = getInstanceByDom(chartRef.current);
			loading === true ? chart?.showLoading() : chart?.hideLoading();
		}
	}, [loading]);

	return (
		<div ref={chartRef} style={{ width: '100%',height:'400px', ...style }} />
	);
};
