'use strict';

const chartPrice = document.querySelectorAll('.chart__price');
const chartSize = document.querySelectorAll('.chart__size');

const weeklySpending = [
	{
		day: 'mon',
		amount: 17.45
	},
	{
		day: 'tue',
		amount: 34.91
	},
	{
		day: 'wed',
		amount: 52.36
	},
	{
		day: 'thu',
		amount: 31.07
	},
	{
		day: 'fri',
		amount: 23.39
	},
	{
		day: 'sat',
		amount: 43.28
	},
	{
		day: 'sun',
		amount: 25.48
	}
];

const addChartPrice = function (chartSize) {
	chartSize.forEach(function (chart, i) {
		chart.addEventListener('mouseover', function (e) {
			if (e.target) {
				chartPrice[i].classList.add('price');
				chartPrice[i].textContent = `$${weeklySpending[i].amount}`;
			}
		});
	});
};
addChartPrice(chartSize);

const removeChartPrice = function (chartSize) {
	chartSize.forEach(function (chart, i) {
		chart.addEventListener('mouseout', function (e) {
			if (e.target) {
				chartPrice[i].classList.remove('price');
			}
		});
	});
};
removeChartPrice(chartSize);
