var mychart=echarts.init(document.getElementById("shouru"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#5d786d','#5e866b','#89a57b','#a2be92','#c7d9a2'],
    title: {
        text: '乡村医生收入情况',
        top:'5%',
        textStyle:{
            fontSize:22,
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        textStyle:{
            fontSize:18,
        },
        bottom:'10',},
    series: [
        {
            name: '收入占比（单位：%）',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 9.4, name: '0-500元' },
                { value: 33.7, name: '500-1000元' },
                { value: 41.5, name: '1000-2000元' },
                { value: 15.4, name: '2000元以上' }
            ]
        }
    ]
};
mychart.setOption(option,true);