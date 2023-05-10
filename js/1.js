var mapArr = []
var mapArr1 = []
$.ajax({
    type: 'GET',
    url: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json?1581410367084 &&callback=sinajp_15814103671094932140955446096',
    dataType: 'jsonp',
    success: function (res) {
        //console.log(res.data)
        let obj = res.data
        //console.log(obj)
        //console.log(obj.list)
        let arr = obj.list
        //console.log(arr[1].value)
        for (let i = 0; i < arr.length; i++) {
            let item = {
                name: arr[i].name,
                value: arr[i].value
            }
            mapArr.push(item)
        }setEchart(mapArr)
        for (let i = 0; i < arr.length; i++) {
            let item = {
                name: arr[i].name,
                value: arr[i].adddaily.conadd
            }
            mapArr1.push(item)
        }
        window.onload=function(){
            document.getElementById("xy1").onclick=function(){
                setEchart(mapArr)
            }
            document.getElementById("xz1").onclick=function(){
                setEchart1(mapArr1)
            }
            {
                var xz="待公布"
                document.getElementById("gn1").innerHTML=xz
            }
            {
                var xz="待公布"
                document.getElementById("gn2").innerHTML=xz
            }
            {
                var xz="待公布"
                document.getElementById("gn3").innerHTML=xz
            }
            {
                var xz="待公布"
                document.getElementById("gn4").innerHTML=xz
            }
            {
                var xz=obj.econNum
                document.getElementById("gn5").innerHTML=xz
            }
            {
                var xz=36636
                document.getElementById("gn6").innerHTML=xz
            }
            {
                var xz=obj.jwsrNum
                document.getElementById("gn7").innerHTML=xz
            }
            {
                var xz=obj.sustotal
                document.getElementById("gn8").innerHTML=xz
            }
            {
                var xz=obj.gntotal
                document.getElementById("gn9").innerHTML=xz
            }
            {
                var xz=obj.econNum
                document.getElementById("gn10").innerHTML=xz
            }
            {
                var xz=obj.curetotal
                document.getElementById("gn11").innerHTML=xz
            }
            {
                var xz=obj.deathtotal
                document.getElementById("gn12").innerHTML=xz
            }
            }
        
    }
})
function setEchart(data) {
    var mCharts = echarts.init(document.getElementById("main"))
    $.get('json/map/china.json', function (chinaJson) {
        echarts.registerMap('chinaMap', chinaJson)
        var option = {
            tooltip: {
                show: true,
                formatter: function (mapArr) {
                    return '地区:' + mapArr.name + '  ' + '确诊:' + mapArr.value
                }
            },
            geo: {
                type: 'map',
                map: 'chinaMap',
                label: {
                    show: true
                },
                zoom: 1
            },
            series: [
                {
                    data: data,
                    geoIndex: 0,
                    type: 'map',
                }
            ],
            visualMap: {
                pieces: [
                    {
                        min: 10000, // 最小值
                        color: '#b80909', // 颜色的范围
                        label: '>=10000',
                    },
                    {
                        min: 1000, // 最小值
                        max: 9999, // 最大值
                        color: '#e64546', // 颜色的范围
                        label: '1000-9999',
                    },
                    {
                        min: 100, // 最小值
                        max: 999, // 最大值
                        color: '#f57567', // 颜色的范围
                        label: '100-999',
                    },
                    {
                        min: 10, // 最小值
                        max: 99, // 最大值
                        color: '#ff9985', // 颜色的范围
                        label: '10-99',
                    },
                    {
                        min: 1, // 最小值
                        max: 9, // 最大值
                        color: '#ffe5db',// 颜色的范围
                        label: '1-9',
                    },
                    {
                        min: 0, // 最小值
                        max: 0, // 最大值
                        color: '#f8f9fa',// 颜色的范围
                        label: '0',
                    },
                ]
            },
        }
        mCharts.setOption(option)
    })
}
function setEchart1(data) {
    var mCharts = echarts.init(document.getElementById("main"))
    $.get('json/map/china.json', function (chinaJson) {
        echarts.registerMap('chinaMap', chinaJson)
        var option = {
            tooltip: {
                show: true,
                formatter: function (mapArr) {
                    return '地区:' + mapArr.name + '  ' + '新增:' + mapArr.value
                }
            },
            geo: {
                type: 'map',
                map: 'chinaMap',
                label: {
                    show: true
                },
                zoom: 1
            },
            series: [
                {
                    data: data,
                    geoIndex: 0,
                    type: 'map',
                }
            ],
            visualMap: {
                pieces: [
                    {
                        min: 10000, // 最小值
                        color: '#b80909', // 颜色的范围
                        label: '>=10000',
                    },
                    {
                        min: 1000, // 最小值
                        max: 9999, // 最大值
                        color: '#e64546', // 颜色的范围
                        label: '1000-9999',
                    },
                    {
                        min: 100, // 最小值
                        max: 999, // 最大值
                        color: '#f57567', // 颜色的范围
                        label: '100-999',
                    },
                    {
                        min: 10, // 最小值
                        max: 99, // 最大值
                        color: '#ff9985', // 颜色的范围
                        label: '10-99',
                    },
                    {
                        min: 1, // 最小值
                        max: 9, // 最大值
                        color: '#ffe5db',// 颜色的范围
                        label: '1-9',
                    },
                    {
                        min: 0, // 最小值
                        max: 0, // 最大值
                        color: '#f8f9fa',// 颜色的范围
                        label: '0',
                    },
                ]
            },
        }
        mCharts.setOption(option)
    })
}
$(function(){
    var nav = $(".nav");
    var win=$(window);
    var sc=$(document);
    win.scroll(function(){
        if(sc.scrollTop()>=100){
            nav.addClass("nav-fixed");
        }else{
            nav.removeClass("nav-fixed");
        }
    })
})