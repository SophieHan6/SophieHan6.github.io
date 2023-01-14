var mychart=echarts.init(document.getElementById("jigou3"));
option = {
    backgroundColor: '#FAF5EB',
    textStyle: {
        fontSize:18
    },
    title: {
        left: 'center',
        text: '基层医疗卫生机构数量变化（与前一年比较）',
        textStyle: {
            fontSize:22
        }
    },
    color: ['#5E7A48', '#E0FCA3', '#24514C','#5E866B','#A1B552'],
    legend: {
        bottom:'10',
        right:'10%',
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '社区卫生服务中心(站)', '卫生院', '村卫生室','门诊部','诊所(医务室)'],
            ['2011',  121,-803,14470,927,1635],
            ['2012',702,-255,-9475,916,2729],
            ['2013', 403,-99,-4800,992,6252],
            ['2014', 273,-111,-3149,904,4050],
            ['2015',83,-156,-4934,1252,7190],
            ['2016', 6,-100,-1773,1497,6118],
            ['2017',325,-147,-6706,2870,10164],
            ['2018',345,-107,-10056,3986,16447],
            ['2019', 16,-363,-5907,4031,12974],
            ['2010',352,-323,-7266,4043,18840],
        ]
    },
    xAxis: { type: 'category' ,
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
    },
    yAxis:
        {
            name: '单位（家）',
            axisLabel:{
                textStyle:{
                    fontSize:16
                }
            },
        },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }, { type: 'bar' }]
};
mychart.setOption(option,true);