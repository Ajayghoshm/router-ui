import { useEffect, useState } from 'react';

const useChartOptions = (chartType) => {
	const categories = (function () {
		let now = new Date();
		const res = [];
		let len = 10;
		while (len--) {
			res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
			now = new Date(+now - 2000);
		}
		return res;
	})();
	const categories2 = (function () {
		const res = [];
		let len = 10;
		while (len--) {
			res.push(10 - len - 1);
		}
		return res;
	})();
	const data = (function () {
		const res = [];
		let len = 10;
		while (len--) {
			res.push(Math.round(Math.random() * 1000));
		}
		return res;
	})();
	const data2 = (function () {
		const res = [];
		let len = 0;
		while (len < 10) {
			res.push(+(Math.random() * 10 + 5).toFixed(1));
			len++;
		}
		return res;
	})();

	let barConfig = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#283b56',
				},
			},
		},
		legend: {},
		dataZoom: {
			show: false,
			start: 0,
			end: 100,
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				data: categories,
			},
			{
				type: 'category',
				boundaryGap: true,
				data: categories2,
			},
		],
		yAxis: [
			{
				type: 'value',
				scale: true,
				name: 'Price',
				max: 30,
				min: 0,
				boundaryGap: [0.2, 0.2],
			},
			{
				type: 'value',
				scale: true,
				name: 'Order',
				max: 1200,
				min: 0,
				boundaryGap: [0.2, 0.2],
			},
		],
		series: [
			{
				name: 'Dynamic Bar',
				type: 'bar',
				xAxisIndex: 1,
				yAxisIndex: 1,
				data: data,
			},
		],
	};

	let lineConfig = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#283b56',
				},
			},
		},
		legend: {},
		dataZoom: {
			show: false,
			start: 0,
			end: 100,
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				data: categories,
			},
			{
				type: 'category',
				boundaryGap: true,
				data: categories2,
			},
		],
		yAxis: [
			{
				type: 'value',
				scale: true,
				name: 'Price',
				max: 30,
				min: 0,
				boundaryGap: [0.2, 0.2],
			},
			{
				type: 'value',
				scale: true,
				name: 'Order',
				max: 1200,
				min: 0,
				boundaryGap: [0.2, 0.2],
			},
		],
		series:[{
			name: 'Dynamic Line',
			type: 'line',
			data: data2,
		}],
	}



	const [chartOptions, setChartOptions] = useState(barConfig);

	useEffect(() => {
		console.debug("type", chartType)
		if (chartType == 'Line') {
			setChartOptions({...lineConfig})
		}
		if (chartType == 'Bar') {
			setChartOptions({...barConfig})
		}
	}, [chartType])

	useEffect(() => {
		let count = 11;
		setInterval(() => {
			let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
			data.shift();
			data.push(Math.round(Math.random() * 1000));
			data2.shift();
			data2.push(+(Math.random() * 10 + 5).toFixed(1));
			categories.shift();
			categories.push(axisData);
			categories2.shift();
			categories2.push(count++);
			setChartOptions({
				xAxis: [{ data: categories }, { data: categories2 }],
				series: [{ data: data }, { data: data2 }],
			});
		}, 4100);
	}, [chartType]);

	return chartOptions;
};


// const useChartOptions=()=>{
// 		(option = {
// 		  title: {
// 			text: 'Beijing AQI',
// 			left: '1%'
// 		  },
// 		  tooltip: {
// 			trigger: 'axis'
// 		  },
// 		  grid: {
// 			left: '5%',
// 			right: '15%',
// 			bottom: '10%'
// 		  },
// 		  xAxis: {
// 			data: data.map(function (item) {
// 			  return item[0];
// 			})
// 		  },
// 		  yAxis: {},
// 		  toolbox: {
// 			right: 10,
// 			feature: {
// 			  dataZoom: {
// 				yAxisIndex: 'none'
// 			  },
// 			  restore: {},
// 			  saveAsImage: {}
// 			}
// 		  },
// 		  dataZoom: [
// 			{
// 			  startValue: '2014-06-01'
// 			},
// 			{
// 			  type: 'inside'
// 			}
// 		  ],
// 		  visualMap: {
// 			top: 50,
// 			right: 10,
// 			pieces: [
// 			  {
// 				gt: 0,
// 				lte: 50,
// 				color: '#93CE07'
// 			  },
// 			  {
// 				gt: 50,
// 				lte: 100,
// 				color: '#FBDB0F'
// 			  },
// 			  {
// 				gt: 100,
// 				lte: 150,
// 				color: '#FC7D02'
// 			  },
// 			  {
// 				gt: 150,
// 				lte: 200,
// 				color: '#FD0100'
// 			  },
// 			  {
// 				gt: 200,
// 				lte: 300,
// 				color: '#AA069F'
// 			  },
// 			  {
// 				gt: 300,
// 				color: '#AC3B2A'
// 			  }
// 			],
// 			outOfRange: {
// 			  color: '#999'
// 			}
// 		  },
// 		  series: {
// 			name: 'Beijing AQI',
// 			type: 'line',
// 			data: data.map(function (item) {
// 			  return item[1];
// 			}),
// 			markLine: {
// 			  silent: true,
// 			  lineStyle: {
// 				color: '#333'
// 			  },
// 			  data: [
// 				{
// 				  yAxis: 50
// 				},
// 				{
// 				  yAxis: 100
// 				},
// 				{
// 				  yAxis: 150
// 				},
// 				{
// 				  yAxis: 200
// 				},
// 				{
// 				  yAxis: 300
// 				}
// 			  ]
// 			}
// 		  }
// 		})
// 	  ;
// }
export default useChartOptions;
