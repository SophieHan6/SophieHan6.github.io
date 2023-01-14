var mychart=echarts.init(document.getElementById("fuwurenshu"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#24514c','#5e7a48','#5e866b','#03302d'],
    title: {
        text: '村卫生室与全国医疗机构服务诊疗情况',
        textStyle:{
            fontSize:22,
        },
        left: 'center'
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
        orient: 'horizontal',
        left: 'center',
        textStyle:{
            fontSize:18,
        },
        bottom:'-7',
        data: ['村卫生室诊疗人次（亿次）', '全国诊疗服务总人次（亿次）']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
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
            name:'年份',
            boundaryGap: false,
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
            name:'诊疗人次(亿次）',
        }
    ],
    series: [
        {
            name: '全国诊疗服务总人次（亿次）',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [68.9, 73.1, 76.0, 76.9, 79.3, 81.8, 83.1,87.2,77.4,84.7]
        },
        {
            name: '村卫生室诊疗人次（亿次）',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [19.3, 20.1, 19.9, 18.9, 18.5, 17.9, 16.7,16.0, 14.3,13.4]
        },
    ]
};
mychart.setOption(option,true);