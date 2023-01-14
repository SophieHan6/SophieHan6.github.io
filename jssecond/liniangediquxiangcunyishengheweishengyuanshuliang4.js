var myChart=echarts.init(document.getElementById("gediqu"));
var uploadedDataURL = "/jssecond/data-1528971808162-BkOXf61WX.json";


//geoCoordMap把所有可能出现的城市加到数组里面
var geoCoordMap = {
    '台湾': [121.5135, 25.0308],
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891],
};

//2011数据
var d1 = {
    '北京':     0.3692,
    '天津': 0.4759,
    '河北': 8.5639,
    '山西': 4.3354,
    '内蒙古': 2.0061,
    '辽宁':2.7045,
    '吉林': 1.9411,
    '黑龙江': 2.6299,
    '上海': 0.0982,
    '江苏': 5.4999,
    '浙江': 1.0833,
    '安徽': 5.5284,
    '福建': 2.8574,
    '江西': 4.8417,
    '山东': 13.5861,
    '河南': 13.2205,
    '湖北': 4.4098,
    '湖南': 4.9299,
    '广东': 3.5194,
    '广西': 3.7436,
    '海南': 0.2796,
    '重庆': 2.4179,
    '四川': 7.5626,
    '贵州': 3.4587,
    '云南': 3.5672,
    '西藏': 0.9125,
    '陕西': 3.8817,
    '甘肃': 2.1043,
    '青海': 0.6369,
    '宁夏': 0.3910,
    '新疆': 1.0877,

};

//2012数据
var d2 = {
    '北京': 0.3659,
    '天津': 0.4811,
    '河北': 8.4779,
    '山西': 4.1626,
    '内蒙古': 1.9318,
    '辽宁': 2.7147,
    '吉林': 1.9128,
    '黑龙江': 2.5398,
    '上海': 0.0771,
    '江苏': 4.4906,
    '浙江': 0.9778,
    '安徽': 5.3180,
    '福建': 2.8183,
    '江西': 4.8773,
    '山东': 13.1914,
    '河南': 12.3888,
    '湖北': 4.2990,
    '湖南': 4.7594,
    '广东': 3.4656,
    '广西': 3.7432,
    '海南': 0.2853,
    '重庆': 2.3320,
    '四川': 7.4418,
    '贵州': 3.6749,
    '云南': 3.5308,
    '西藏': 1.0223,
    '陕西': 3.7113,
    '甘肃': 2.1398,
    '青海': 0.6568,
    '宁夏': 0.3682,
    '新疆': 1.2856,

};
//2013数据
var d3 = {
    '北京': 0.353,
    '天津': 0.4581,
    '河北': 8.3849,
    '山西': 4.0856,
    '内蒙古': 1.9496,
    '辽宁': 2.5634,
    '吉林': 1.9318,
    '黑龙江': 2.5061,
    '上海': 0.076,
    '江苏': 3.9774,
    '浙江': 0.8945,
    '安徽': 5.1621,
    '福建': 2.7922,
    '江西': 4.7485,
    '山东': 13.4372,
    '河南': 12.1349,
    '湖北': 4.2859,
    '湖南': 4.8544,
    '广东': 3.328,
    '广西': 3.7073,
    '海南': 0.3377,
    '重庆': 2.3397,
    '四川': 7.3907,
    '贵州': 3.6302,
    '云南': 3.5937,
    '西藏': 1.0434,
    '陕西': 3.4692,
    '甘肃': 2.1966,
    '青海': 0.674,
    '宁夏': 0.3664,
    '新疆': 1.4338,

};
//2014数据
var d4 = {
    '北京': 0.3406,
    '天津': 0.5205,
    '河北': 8.3519,
    '山西': 3.945,
    '内蒙古': 1.8422,
    '辽宁': 2.4642,
    '吉林': 1.8954,
    '黑龙江': 2.4359,
    '上海': 0.0802,
    '江苏': 3.7796,
    '浙江': 0.8546,
    '安徽': 4.8271,
    '福建': 2.7201,
    '江西': 4.6841,
    '山东': 13.2234,
    '河南': 11.9307,
    '湖北': 4.2264,
    '湖南': 4.802,
    '广东': 2.8515,
    '广西': 3.6757,
    '海南': 0.3565,
    '重庆': 2.2775,
    '四川': 7.2998,
    '贵州': 3.6294,
    '云南': 3.5666,
    '西藏': 1.1109,
    '陕西': 3.3372,
    '甘肃': 2.1682,
    '青海': 0.6938,
    '宁夏': 0.393,
    '新疆': 1.5342,

};
//2015数据
var d5 = {

    '北京': 0.3438,
    '天津': 0.515,
    '河北': 8.2362,
    '山西': 3.8534,
    '内蒙古': 1.8278,
    '辽宁': 2.4599,
    '吉林': 1.7489,
    '黑龙江': 2.3816,
    '上海': 0.0885,
    '江苏': 3.4615,
    '浙江': 0.817,
    '安徽': 4.5914,
    '福建': 2.6922,
    '江西': 4.6116,
    '山东': 12.8735,
    '河南': 11.6512,
    '湖北': 4.0896,
    '湖南': 4.7932,
    '广东': 2.6011,
    '广西': 3.6112,
    '海南': 0.3393,
    '重庆': 2.2294,
    '四川': 7.0425,
    '贵州': 3.5997,
    '云南': 3.5749,
    '西藏': 1.1434,
    '陕西': 3.3173,
    '甘肃': 2.1364,
    '青海': 0.7022,
    '宁夏': 0.3632,
    '新疆': 1.4556,


};
//2016数据
var d6 = {
    '北京': 0.3364,
    '天津': 0.514,
    '河北': 8.2281,
    '山西': 3.8593,
    '内蒙古': 1.7944,
    '辽宁': 2.5095,
    '吉林': 1.7248,
    '黑龙江': 2.3464,
    '上海': 0.0806,
    '江苏': 3.252,
    '浙江': 0.8,
    '安徽': 4.329,
    '福建': 2.6502,
    '江西': 4.5079,
    '山东': 11.828,
    '河南': 11.3804,
    '湖北': 4.0396,
    '湖南': 4.7058,
    '广东': 2.4996,
    '广西': 3.4981,
    '海南': 0.3312,
    '重庆': 2.1644,
    '四川': 6.545,
    '贵州': 3.469,
    '云南': 3.6038,
    '西藏': 1.0905,
    '陕西': 3.2706,
    '甘肃': 2.1121,
    '青海': 0.6528,
    '宁夏': 0.3559,
    '新疆': 1.553,

};
//2017
var d7 = {
    '北京': 0.3247,
    '天津': 0.4973,
    '河北': 7.9741,
    '山西': 3.7935,
    '内蒙古': 1.8128,
    '辽宁': 2.3995,
    '吉林': 1.6097,
    '黑龙江': 2.1688,
    '上海': 0.0829,
    '江苏': 3.0934,
    '浙江': 0.7792,
    '安徽': 4.0869,
    '福建': 2.5256,
    '江西': 4.3421,
    '山东': 10.9657,
    '河南': 10.9457,
    '湖北': 3.953,
    '湖南': 4.446,
    '广东': 2.4051,
    '广西': 3.4147,
    '海南': 0.3012,
    '重庆': 2.0076,
    '四川': 6.4771,
    '贵州': 3.5105,
    '云南': 3.7308,
    '西藏': 1.2685,
    '陕西': 3.1853,
    '甘肃': 2.1358,
    '青海': 0.7121,
    '宁夏': 0.3244,
    '新疆': 1.5871,


};
//2018
var d8 = {
    '北京': 0.2977,
    '天津': 0.46,
    '河北': 7.269,
    '山西': 3.5642,
    '内蒙古': 1.7639,
    '辽宁': 2.1884,
    '吉林': 1.4768,
    '黑龙江': 2.0156,
    '上海': 0.0717,
    '江苏': 2.7,
    '浙江': 0.7312,
    '安徽': 3.7609,
    '福建': 2.3297,
    '江西': 3.955,
    '山东': 10.1069,
    '河南': 10.3306,
    '湖北': 3.7373,
    '湖南': 3.9987,
    '广东': 2.3063,
    '广西': 3.2648,
    '海南': 0.3378,
    '重庆': 1.7906,
    '四川': 6.2907,
    '贵州': 3.4097,
    '云南': 3.8443,
    '西藏': 1.2748,
    '陕西': 2.9424,
    '甘肃': 1.933,
    '青海': 0.6795,
    '宁夏': 0.3137,
    '新疆': 1.5646,


};
//2019
var d9 = {
    '北京': 0.2776,
    '天津': 0.4107,
    '河北': 6.5749,
    '山西': 3.3967,
    '内蒙古': 1.6397,
    '辽宁': 1.9756,
    '吉林': 1.3617,
    '黑龙江': 1.8072,
    '上海': 0.0599,
    '江苏': 2.4803,
    '浙江': 0.6937,
    '安徽': 3.5006,
    '福建': 2.1202,
    '江西': 3.7284,
    '山东': 9.0798,
    '河南': 9.6002,
    '湖北': 3.4434,
    '湖南': 3.6374,
    '广东': 2.181,
    '广西': 3.1295,
    '海南': 0.3233,
    '重庆': 1.6012,
    '四川': 6.0546,
    '贵州': 3.2027,
    '云南': 3.7483,
    '西藏': 1.2412,
    '陕西': 2.7226,
    '甘肃': 1.8197,
    '青海': 0.686,
    '宁夏': 0.3132,
    '新疆': 1.4189,


};
//2020
var d10 = {
    '北京': 0.2661,
    '天津': 0.3535,
    '河北': 6.1629,
    '山西': 3.142,
    '内蒙古': 1.5586,
    '辽宁': 1.7915,
    '吉林': 1.3566,
    '黑龙江': 1.6867,
    '上海': 0.0649,
    '江苏': 2.3156,
    '浙江': 0.6628,
    '安徽': 3.0799,
    '福建': 1.9401,
    '江西': 3.6037,
    '山东': 8.3256,
    '河南': 9.0322,
    '湖北': 3.2691,
    '湖南': 3.3641,
    '广东': 2.0839,
    '广西': 3.012,
    '海南': 0.3303,
    '重庆': 1.4913,
    '四川': 5.7108,
    '贵州': 3.1348,
    '云南': 3.6465,
    '西藏': 1.2564,
    '陕西': 2.5224,
    '甘肃': 1.8073,
    '青海': 0.667,
    '宁夏': 0.3143,
    '新疆': 1.4738,

};

var colors = [
    ["#7ea4df","#df9446","#f05a46", "#D4bf9a", "#adbfbc", "#b3aba3", "#FFC809", "#fc7930", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
var colorIndex = 0;
$(function() {
    var year = ["2011", "2012", "2013", "2014", "2015",  "2016", "2017", "2018", "2019", "2020"];
    var mapData = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData[0].push({
            "year": '2011年',
            "name": key,
            "value": d1[key],
        });
        mapData[1].push({
            "year": '2012年',
            "name": key,
            "value": d2[key],
        });
        mapData[2].push({
            "year": '2013年',
            "name": key,
            "value": d3[key],
        });
        mapData[3].push({
            "year": '2015年',
            "name": key,
            "value": d4[key],
        });
        mapData[4].push({
            "year": '2015年',
            "name": key,
            "value": d5[key],
        });
        mapData[5].push({
            "year": '2016年',
            "name": key,
            "value": d6[key],
        });
        mapData[6].push({
            "year": '2017年',
            "name": key,
            "value": d7[key],
        });
        mapData[7].push({
            "year": '2018年',
            "name": key,
            "value": d8[key],
        });
        mapData[8].push({
            "year": '2019年',
            "name": key,
            "value": d9[key],
        });
        mapData[9].push({
            "year": '2020年',
            "name": key,
            "value": d10[key],
        });

    }

    for (var i = 0; i < mapData.length; i++) {
        mapData[i].sort(function sortNumber(a, b) {
            return a.value - b.value
        });
        barData.push([]);
        categoryData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value);
            categoryData[i].push(mapData[i][j].name);
        }
    }

    $.getJSON(uploadedDataURL, function(geoJson) {

        echarts.registerMap('china', geoJson);
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        optionXyMap01 = {
            timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '1%',
                    top: '15%',
                    bottom: '10%',
                    width: '20%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: '#8cc269' //hover颜色
                        }
                    }
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: false,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#a4cab6',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: '#f0f5e5' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#b7d07a' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: '#9eccab',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#8cc269',
                            borderWidth: 0
                        }
                    }
                },
            },
            options: []

        };

        for (var n = 0; n < year.length; n++) {
            optionXyMap01.options.push({
                backgroundColor: '#FAF5EB',
                title:
                    [{
                        text: '乡村医生和卫生员数量（2011——2020）',
                        textStyle: {
                            color: '#47484c',
                            fontfamily: "sans-serif",
                            fontSize: 24
                        },
                        subtext: '数据来源：历年《统计年鉴》',
                        left: '3%',
                        top: '3%',
                        subtextStyle: {
                            color:'#5e616d',
                            fontSize: 12,
                            fontWeight: 'normal'
                        },

                    },
                        {
                            id: 'statistic',
                            text: year[n] + "年乡村医生和卫生员数省排名",
                            subtext: '单位（万人）',
                            left: '68%',
                            top: '6%',
                            textStyle: {
                                color: '#47484c',
                                fontSize: 14
                            }
                        }
                    ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 1,
                    max: 15,
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 1,
                        textStyle: {
                            color: '#5e616d'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP',
                    nameGap: 15,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '##5e616d'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '##5e616d'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#5e616d'
                        }
                    },
                    data: categoryData[n]
                },

                series: [
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#e4bfad',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: false,
                        data: mapData
                    },
                    //地图中闪烁的点
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n].sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 40)),
                        symbolSize: function(val) {
                            return val[2] *3;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 10,
                                shadowColor: colors[colorIndex][n]
                            }
                        },
                        zlevel: 1
                    },
                    //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        data: barData[n]
                    }
                ]
            })
        }
        myChart.setOption(optionXyMap01);
    });
});

myChart.setOption(option,true);

window.onresize=function (){
    myChart.resize();
}
