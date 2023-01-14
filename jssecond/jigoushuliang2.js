var mychart=echarts.init(document.getElementById("jigou2"));
option = {
    backgroundColor: '#FAF5EB',
    textStyle: {
        fontSize:18
    },
    color: ['#5E7A48', '#E0FCA3', '#24514C','#5E866B','#A1B552'],
    title: {
        left: 'center',
        text: '基层医疗卫生机构数量',
        top:1,
        textStyle: {
            fontSize:22
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        left: 'center',
        top:'30',
        data: ['村卫生室', '诊所（医务室）', '社区卫生站服务中心（站）', '卫生院', '门诊部']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '1%',
        top:'18%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
            boundaryGap: false,
            data: ['2010','2011', '2012','2013', '2014', '2015', '2016', '2017','2018', '2019', '2020']
        }
    ],
    yAxis: [
        {
            name: '单位（家）',
            type: 'value',
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
        }
    ],
    series: [
        {
            name: '村卫生室',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {
                opacity: 0.8,
                color:'#5E7A48'
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 648424, 662894, 653419, 648619, 645470, 640536, 638763, 632057, 622001, 616094, 608828]
        },
        {
            name: '诊所（医务室）',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: '#E0FCA3'
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 173434, 175069, 177798, 184050, 188100, 195290, 201408, 211572, 228019, 240993, 259833]
        },
        {
            name: '社区卫生站服务中心（站）',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color:'#24514C'
            },
            emphasis: {
                focus: 'series'
            },
            data: [32739, 32860, 33562, 33965, 34238, 34321, 34327, 34652, 35997, 35013,35375]
        },
        {
            name: '卫生院',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: '#5E866B'
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 38765, 37962, 37707, 37608, 37497, 37341, 37241, 37094, 36987, 36624, 36301]
        },
        {
            name: '门诊部',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: '#A1B552'
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 8291, 9218, 10134, 11126, 12030, 13282, 14779, 17649, 21635, 25666, 29709]
        },
    ]
};
mychart.setOption(option,true);