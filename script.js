const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1aa826370msh028a8b9eef08fe1p1f83eejsne10754fecb66',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getData = (city)=>{
	if (city == "") {
		return;
	  }
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		title.innerHTML = city;
		cloud_pct.innerHTML = response.cloud_pct;
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = unixTimestampToTime(response.sunrise)
		sunset.innerHTML = unixTimestampToTime(response.sunset)
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		console.log(response);
	})
	.catch(err => console.error(err)); 
}


function unixTimestampToTime(unixTimestamp) {
	const dateObject = new Date(unixTimestamp*1000);
	let hours = dateObject.getHours();
	let minutes = dateObject.getMinutes().toString().padStart(2, '0');
	let ampm = 'am';
  
	if (hours >= 12) {
	  ampm = 'pm';
	  hours -= 12;
	}
  
	if (hours === 0) {
	  hours = 12;
	}
  
	hours = hours.toString().padStart(2, '0');
  
	return `${hours}:${minutes} ${ampm}`;
  }

  submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getData(cityname.value)
})
  
getData('Kohat')

function changeDate(city,Cloud_PCT,FeelsLike,Humidity,Max_Temp,Min_Temp,Sunrise,Sunset,Temp,Winddegrees,Wind_Speed) {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		Cloud_PCT.innerHTML = response.cloud_pct;
		FeelsLike.innerHTML = response.feels_like
		Humidity.innerHTML = response.humidity
		Max_Temp.innerHTML = response.max_temp
		Min_Temp.innerHTML = response.min_temp
		Sunrise.innerHTML = unixTimestampToTime(response.sunrise)
		Sunset.innerHTML = unixTimestampToTime(response.sunset)
		Temp.innerHTML = response.temp
		Winddegrees.innerHTML = response.wind_degrees
		Wind_Speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err)); 
}
changeDate("kohat",cloud_pct_fork,feelslike_fork,humidity_fork,max_temp_fork,min_temp_fork,sunrise_fork,sunset_fork,temp_fork,wind_degrees_fork,wind_speed_fork)
changeDate("peshawar",cloud_pct_forp,feelslike_forp,humidity_forp,max_temp_forp,min_temp_forp,sunrise_forp,sunset_forp,temp_forp,wind_degrees_forp,wind_speed_forp)
changeDate("rawalpindi",cloud_pct_forrawa,feelslike_forrawa,humidity_forrawa,max_temp_forrawa,min_temp_forrawa,sunrise_forrawa,sunset_forrawa,temp_forrawa,wind_degrees_forrawa,wind_speed_forrawa)
changeDate("lahore",cloud_pct_forlah,feelslike_forlah,humidity_forlah,max_temp_forlah,min_temp_forlah,sunrise_forlah,sunset_forlah,temp_forlah,wind_degrees_forlah,wind_speed_forlah)
changeDate("karachi",cloud_pct_forkar,feelslike_forkar,humidity_forkar,max_temp_forkar,min_temp_forkar,sunrise_forkar,sunset_forkar,temp_forkar,wind_degrees_forkar,wind_speed_forkar)
changeDate("islamabad",cloud_pct_forisla,feelslike_forisla,humidity_forisla,max_temp_forisla,min_temp_forisla,sunrise_forisla,sunset_forisla,temp_forisla,wind_degrees_forisla,wind_speed_forisla)
