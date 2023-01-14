var mychart=echarts.init(document.getElementById("nianling1"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#e0fca3','#03302d','#24514c','#5e866b','#68945c','#a8bf8f'],
    title: {
        text: '乡村医生年龄构成',
        subtext: '单位:%',
        left:'center'
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    angleAxis: {
        type: 'category',
        data: ['2015', '2016', '2017', '2018', '2019', '2020', ]
    },
    radiusAxis: {},
    polar: {},
    series: [
        {
            type: 'bar',
            data: [0.5, 0.5, 0.7, 0.5, 0.6, 0.6, 0.7],
            coordinateSystem: 'polar',
            name: '25岁以下(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'bar',
            data: [9.8, 8.1, 7.5, 4.5, 4.3, 4.3],
            coordinateSystem: 'polar',
            name: '25~34岁(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'bar',
            data: [32.8, 32.6, 27.9, 28.1, 24.7, 22.4],
            coordinateSystem: 'polar',
            name: '35~44岁(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'bar',
            data: [23.7, 26.2, 27.9, 30.9, 32.7, 33.7],
            coordinateSystem: 'polar',
            name: '45~54岁(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'bar',
            data:  [ 9.4, 8, 8.3, 9.2, 10.5, 12.1],
            coordinateSystem: 'polar',
            name: '55~59岁(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            type: 'bar',
            data: [23.9, 24.7, 27, 26.8, 27.2, 26.8],
            coordinateSystem: 'polar',
            name: '60岁以上(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        }
    ],

    legend: {
        orient: 'horizontal',
        left: 'center',
        bottom:'10',
        show: true,
        data: ['25岁以下', '25~34岁', '35~44岁','45~54岁', '55~59岁', '60岁以上']
    }
};
mychart.setOption(option,true);