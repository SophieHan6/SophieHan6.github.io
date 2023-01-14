var mychart=echarts.init(document.getElementById("tuichu"));
option = {
    backgroundColor: '#FAF5EB',
    color:['#5d786d','#5e866b','#89a57b','#a2be92','#c7d9a2'],
    title: {
        text: '乡村医生行业退出情况',
        textStyle:{
            fontSize:22,
        },
        left: 'center',
        top:'0%'
    },
    tooltip: {
        trigger: 'item',
    },
    angleAxis: {
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        }
    },
    radiusAxis: {
        type: 'category',
        data: ['西部', '中部', '东部'],
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
        z: 10
    },
    polar: {},
    series: [
        {
            center: ['25%', '50%'],
            type: 'bar',
            data: [38.2, 66.9, 74.7],
            coordinateSystem: 'polar',
            name: '到龄退出(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            center: ['25%', '50%'],
            type: 'bar',
            data: [26.5, 4.1, 6.7],
            coordinateSystem: 'polar',
            name: '从事其他行业(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            center: ['25%', '50%'],
            type: 'bar',
            data: [7.8, 4.7,12.9],
            coordinateSystem: 'polar',
            name: '进入上级医疗机构(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            center: ['25%', '50%'],
            type: 'bar',
            data: [6.9, 6.4,4.4],
            coordinateSystem: 'polar',
            name: '开个体诊所(单位：%）',
            stack: 'a',
            emphasis: {
                focus: 'series'
            }
        },
        {
            center: ['25%', '50%'],
            type: 'bar',
            data: [20.6, 18.0, 1.3],
            coordinateSystem: 'polar',
            name: '其他(单位：%）',
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
        data: ['到龄退出', '从事其他行业', '进入上级医疗机构','开个体诊所','其他']
    }
};
mychart.setOption(option,true);