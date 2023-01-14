var mychart=echarts.init(document.getElementById("cunweishengshishuliang"));
let xaxisData = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let yaxisData = [66.2894,  65.3419,  64.8619,  64.5470, 64.0536,63.8763, 63.2057,  62.2001,  61.6094, 60.8828];

option = {
    backgroundColor: '#FAF5EB',
    title:{
        text:'村卫生室数量',
        left:'center',
        top:'4%',
        textStyle: {
            fontSize:22
        }
    },
    textStyle: {
        fontSize:18
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
        extraCssText: "box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.3);",
        textStyle: {
            fontSize: 14,
            color: "#000",
        },
        formatter: (params) => {
            const item = params[0];
            return item.name + " : " + item.value + " 万家";
        },
    },
    grid: {
        left: "1%",
        right: "0%",
        top: "12%",
        bottom: "1%",
        containLabel: true,
    },
    xAxis: [
        {
            type: "category",
            axisLabel: {
                interval: 0,
                color: "#999",
                fontSize: 16,
            },
            axisLine: {
                lineStyle: {
                    //y轴网格线设置
                    color: "#545454",
                    width: 1,
                },
            },
            axisTick: {
                show: false,
            },
            data: xaxisData,
        },
    ],
    yAxis: [
        {
            type: "value",
            name: "单位：万家",
            min: 60,
            max: 67,
            nameTextStyle: {
                color: "#",
                fontWeight: 400,
                fontSize: 14,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#545454",
                    width: 1,
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                fontSize: 16,
                color: "#999",
            },
        },
    ],
    series: [
        {
            type: "bar",
            barWidth: 16,
            label: {
                show: true,
                position: "top",
                color: "#000",
                fontSize:18
            },
            itemStyle: {
                borderRadius: [8, 8, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#5E866B",
                    },
                    {
                        offset: 1,
                        color: "#E0FCA3",
                    },
                ]),
            },
            data: yaxisData,
        },
    ],
};
mychart.setOption(option,true);