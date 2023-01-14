var mychart=echarts.init(document.getElementById("shouzhen"));

option = {
    backgroundColor: '#FAF5EB',
    color:['#a8bf8f','#68945c','#5e866b','#24514c','#03302d',],
    title: {
        text: '首诊机构构成',
        textStyle:{
            fontSize:22,
        },
        left: 'center',
        color: '#03302d'
    },
    grid: {
        left: 50,
        bottom: 0,
        right: 50,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%'
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        bottom:'20',
        textStyle:{
            fontSize:18,
        },
    },
    series: [
        {
            name: '城市首诊机构构成',
            type: 'pie',
            radius: '50%',
            center: ['32%', '50%'],
            data: [
                { value: 31.6, name: '卫生室（站）' },
                { value: 23.0, name: '社区卫生服务中心（站）' },
                { value: 33.9, name: '医院' },
                { value: 7.1, name: '卫生院'},
                { value: 4.4, name: '其他' },
            ],
            itemStyle: {
                emphasis: {

                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        textStyle:{
                            fontSize:18
                        }
                    }
                }
            }
        },
        {
            name: '农村首诊机构构成',
            type: 'pie',
            radius: '50%',
            center: ['68%', '50%'],

            data: [
                { value: 51.9, name: '卫生室（站）' },
                { value: 19.9, name: '社区卫生服务中心（站）' },
                { value: 19.2, name: '卫生院'},
                { value: 4.5, name: '医院' },
                { value: 4.5, name: '其他' },
            ],
            itemStyle: {
                emphasis: {

                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        textStyle:{
                            fontSize:18
                        }
                    }
                }
            }
        }
    ]
};
mychart.setOption(option,true);