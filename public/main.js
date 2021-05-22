const submit = document.getElementById('submitbt');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp =document.getElementById('temp');
const temp_status = document.getElementById('tempstatus');
const type=document.getElementById('fig');
const getinfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === "")
    {
        city_name.innerText = `Plz enter the city`;
    }
    else
    {
        try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=4409dedae5f32f126e564c5335c69c8d`;
    const response = await fetch(url);
    const data = await response.json();
    const arrdata = [data];
    city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
    temp.innerText = `Temperature-  ${arrdata[0].main.temp}*C`;
    temp_status.innerText = `Status- ${arrdata[0].weather[0].main}`;
    console.log(temp_status.innerText);
    
        }
        catch{
            city_name.innerText = `Plz enter the valid city`;
        }
        if (temp_status.innerText == 'Status- Clouds')
{
    type.src="images/cloudy2.png";
}
else if(temp_status.innerText=='Status- Haze')
{
    type.src="images/haze2.png";
}
else if(temp_status.innerText=='Status- Mist')
{
    type.src="images/haze2.png";
}
else if(temp_status.innerText=='Status- Smoke')
{
    type.src="images/haze2.png";
}
else if(temp_status.innerText=='Status- Clear')
{
    type.src="images/sn.png";
}
else if(temp_status.innerText=='Status- Rain')
{
    type.src="images/rn.png";
}

    }
}
const day = document.getElementById('day');
const curr = ()=>{
    let weekday = new Array(7);
    weekday[0]="Sunday,";
    weekday[1]="Monday,";
    weekday[2]="Tuesday,";
    weekday[3]="Wed,";
    weekday[4]="Thus,";
    weekday[5]="Friday,";
    weekday[6]="Sat,";
    let currt = new Date();
    days = weekday[currt.getDay()];
    let day = document.getElementById('day');
    day.innerText = days;
}
const today = document.getElementById('today');
const timess = document.getElementById('time');
const gett = ()=>{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sept", "October", "Nov", "Dec"];
    const now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    let today = document.getElementById('today');
    today.innerText = `${date} ${month}`;
   
}
curr();
gett();
submitbt.addEventListener('click',getinfo);
