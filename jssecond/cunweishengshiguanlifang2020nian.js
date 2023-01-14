var myChart=echarts.init(document.getElementById("guanlifang2"));

data = [{
    "value": 337868,
    "name": "村办"
}, {
    "value": 71858,
    "name": "乡卫生院设点"
}, {
    "value": 26817,
    "name": "联合办"
}, {
    "value": 125503,
    "name": "私人办"
}, {
    "value": 46782,
    "name": "其他"
}]
for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value']
}
option = {
    visualMap: {
        show:true,
        min: 0,
        max: 400000,
        itemWidth:20,
        itemHeight:130,
        itemGap:20,
        left: '35%',
        top:'81%',
        align:'left',
        orient: 'horizontal',
        text:['400000','0'],
        textStyle:{
            color:'#333',
            fontSize:18,
            align:'right'
        },
        inRange: {
            color: [ '#D9E8B2','#24514C',] // 蓝绿
        }
    },
    title: {
        text: '2020年村卫生室设立方数量',
        subtext: '单位（家）',
        left: '50%',
        top:'91%',
        textAlign: 'center',
        textStyle: {
            color: "#000",
            fontWeight: 'normal',
            fontSize:22,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}",
    },
    series: [{
        type: 'treemap',
        width: '100%',
        height: '77%',
        top: '2%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
            show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
                position: ['10%', '40%'],
                textStyle:{
                    fontSize:18
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                borderWidth: 1,
                borderColor: '#fff',
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data
    }]
};
myChart.setOption(option,true);