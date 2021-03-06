		let myChart=document.getElementById('myChart').getContext('2d');
		//配置全局默认信息
		Chart.defaults.global.defaultFontFamily='Lato';
		Chart.defaults.global.defaultFontSize=18;
		Chart.defaults.global.defaultFontColor='#777';
		//实例化chart对象
		let chart=new Chart(myChart,{
			type:'bar',//图标类型，柱状图
			data:{
				labels:["北京","深圳","广州","上海","杭州","成都"],//轴类别
				datasets:[{                //数据
					label:"工作热度值",
					data:[617594,584104,542156,423851,482134,421217],
					//颜色
					backgroundColor:[
					'rgba(255,99,132,0.6)',
					'rgba(54,162,235,0.6)',
					'rgba(255,206,86,0.6)',
					'rgba(75,192,192,0.6)',
					'rgba(153,102,255,0.6)',
					'rgba(255,159,64,0.6)',
					],
					//添加边框
					borderWidth:1,
					borderColor:'#777',
					hoverBorderWidth:3,
					hoverBorderColor:'#000'
				}],
			},
			options:{
				//标题
				title:{
					display:true,
					text:"中国各大城市工作热度值",
					fontSize:25
				},
				//注释设置
				legend:{
					display:true,
					position:'right',
					labels:{
						fontColor:'#000'
					}
				},
				//位置
				layout:{
					padding:{
						left:50,right:0,bottom:0,top:0
					}
				},
				tooltips:{
					enabled:true
				}

			}
		});