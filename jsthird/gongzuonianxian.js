var mychart=echarts.init(document.getElementById("gongzuonianxian"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#a2be92','#5e866b'],
    title: {
        text: '乡村医生与全体医疗机构卫生人员工作年限情况',
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
    tooltip: {
    },
    dataset: {
        source: [
            ['product', '全体卫生人员占比（%）', '乡村医生占比（%）'],
            ['5年以下', 24.9,6.1],
            ['5~9年', 23.1,9.0],
            ['10~19年', 23.1,32.2],
            ['20~29年', 16.2,24.4],
            ['30年以上', 12.7,28.3]
        ]
    },
    xAxis: { type: 'category',
        name: '工作年限',

        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
    },
    yAxis: {name: '人员占比（单位：%）',
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },

    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' },
        { type: 'bar' }]
};
mychart.setOption(option,true);