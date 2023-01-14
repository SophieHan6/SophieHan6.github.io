var mychart=echarts.init(document.getElementById("nianling2"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#a2be92','#5e866b'],
    title: {
        text: '乡村医生与全体医疗机构卫生人员年龄情况',
        left: 'center',
        textStyle:{
            fontSize:22,
        },
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        textStyle:{
            fontSize:18,
        },
        bottom:'10',},
    tooltip: {},
    dataset: {
        source: [
            ['product', '全体卫生人员占比（%）', '乡村医生占比（%）'],
            ['25岁以下',8.9,0.7],
            ['25~34岁', 40,4.3],
            ['35~44岁',24.8,22.4],
            ['45~54岁', 16.5,33.7],
            ['55岁~59岁', 4.7,12.1],
            ['60年以上', 5.1,26.8]
        ]
    },
    xAxis: { type: 'category',
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
        name: '年龄' },
    yAxis: {name: '人员占比（单位：%）',
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' },{ type: 'bar' }]
};
mychart.setOption(option,true);