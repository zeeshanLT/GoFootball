export const getOneDayStat = ()=>(dispatch)=>{
	fetch('https://stats.rooter.io/api/FootballMatches/live?fromDate=2018-09-29&toDate=2018-09-29')
		.then(data => data.json())
		.then(data => {
			console.log("Data FETCHED!!!!!!!!");
			dispatch({
					type: 'STAT_FETCH',
					payload: data,
			});
		})
    .catch(()=>{
	  	console.log('BAD REQUEST');
    });

};