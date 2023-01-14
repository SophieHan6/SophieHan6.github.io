var myChart=echarts.init(document.getElementById("zongtijigoushuliang"));

setTimeout(function () {
    option = {
        backgroundColor: '#FAF5EB',
        textStyle: {
            fontSize:18
        },
        title: {
            left: 'center',
            text: '全国卫生机构数量',
            top:3,
            textStyle: {
                fontSize:22
            }
        },
        legend: {
            bottom:'10'
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['年份', '2010','2011', '2012','2013', '2014', '2015', '2016', '2017','2018', '2019', '2020'],
                ['医院总数', 20918, 21979, 23170, 24709, 25860, 27587, 29140, 31056, 33009, 34354, 35394],
                ['基层医疗卫生机构数', 901709, 918003, 912620, 915368, 917335, 920770, 926518, 933024, 943639, 954390, 970036],
                ['专业公共卫生机构数', 11835, 11926, 12083, 31155, 35029, 31927, 24866, 19896, 18033, 15958, 14492],
            ],

        },
        xAxis: { type: 'category' ,
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
        },
        yAxis: {
            name: '单位（家）',
            gridIndex: 0 ,
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            }
        },
        grid: { top: '55%' },
        series: [
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#03302D',
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#A1B552',
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#5E866B',
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
                color:'#24514C',
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '33%',
                center: ['50%', '28%'],
                color:['#24514C','#A1B552','#5E866B'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2010} ({d}%)',
                    textStyle: {
                        fontSize: 18
                    }
                },
                encode: {
                    itemName: '年份',
                    value: '2010',
                    tooltip: '2010'
                }
            }
        ]
    };
    myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart.setOption(option);
});