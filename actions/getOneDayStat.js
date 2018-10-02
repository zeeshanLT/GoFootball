export const getOneDayStat = (day)=>(dispatch)=>{
	var today = new Date();
	var query;
	var temp = '2018-09-30';
	function generateQuery(date){
		return [date.getFullYear(),date.getMonth()+1,date.getDate()];
	}

	if(day === 'TODAY'){
		temp = generateQuery(today);
	}else if(day === 'TOMORROW'){
		var nextDay = new Date(today);
		nextDay.setDate(today.getDate()+1);
		temp = generateQuery(nextDay);
	}else if(day === 'YESTERDAY'){
		var prevDate = new Date(today);
		prevDate.setDate(today.getDate()-1);
		temp = generateQuery(prevDate);
	}

	query = temp[0]+'-'+(temp[1].toString().length<2?'0'+temp[1]:temp[1])+'-'+(temp[2].toString().length<2?'0'+temp[2]:temp[2]);
	fetch('https://stats.rooter.io/api/FootballMatches/live?fromDate='+query+'&toDate='+query)
		.then(data => data.json())
		.then(data => {
			console.log("Data FETCHED!!!!!!!!");
			dispatch({
					type: day,
					payload: data,
			});
		})
    .catch(()=>{
	  	console.log('BAD REQUEST');
    });

};