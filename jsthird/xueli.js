var mychart=echarts.init(document.getElementById("xueli"));
// prettier-ignore
const hours = [
    '2015', '2016', '2017', '2018', '2019','2020'
];
// prettier-ignore
const days = [
    '研究生', '大学本科', '大专',
    '中专', '高中及以下'
];
// prettier-ignore
const data = [[0, 5,5.0],  [1, 5, 36.2], [2, 5, 38.4],  [3, 5, 18.4], [4, 5, 1],
    [0, 4, 5.9], [1, 4, 32.6], [2, 4, 39.4],  [3, 4, 21], [4, 4, 1.2],
    [0, 3, 5.6], [1, 3, 30.6],[2, 3, 39.3],  [3,3, 23.1], [4,3, 1.5],
    [0, 2, 5.3],  [1, 2, 28.8], [2, 2, 39.1], [3, 2, 25.1],[4, 2, 1.8],
    [0, 1, 5],  [1, 1, 27.2], [2, 1, 39.3], [3, 1, 26.5],  [4, 1, 2],
    [0, 0, 4.7],  [1, 0, 25.9],  [2, 0, 38.9], [3, 0, 28.2],  [4, 0, 2.3]]
    .map(function (item) {
        return [item[1], item[0], item[2]];
    });
option = {
    backgroundColor: '#FAF5EB',
    color:['#5e866b'],
    title: {
        text: '全国医疗机构卫生人员学历分布',
        textStyle:{
            fontSize:22,
        },
        left: 'center'
    },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return (
                params.value[2] + '%'
            );
        }
    },
    grid: {
        left: 50,
        bottom: 10,
        right: 100,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',

        axisLabel:{
            margin: 80,
            textStyle:{
                fontSize:16
            }
        },

        data: days,
        axisLine: {
            show: false,
        }
    },
    series: [
        {axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
            name: 'Punch Card',
            type: 'scatter',
            symbolSize: function (val) {
                return val[2] * 3;
            },
            data: data,
            animationDelay: function (idx) {
                return idx * 5;
            }
        }
    ]
};
mychart.setOption(option,true);