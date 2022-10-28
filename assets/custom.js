
    const countryName = document.getElementById('countryName');
    const countryBtn = document.getElementById('btn');
    const displayCty= document.getElementById('showCountry');
    const displayTemp = document.getElementById('temp');
    const displayCond = document.getElementById('condition');
    const imagesIcon = document.getElementById('img-icon');
    

    countryBtn.addEventListener('click', fun =>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+countryName.value+'&appid=48aa131c499eb3d9bd164361bedacf91')
        .then(res => res.json())
        .then(data =>{

        const imageUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        displayCty.innerText=data.name;
        displayTemp.innerText= parseFloat(data.main.temp - 273.15).toFixed(2);
        displayCond.innerText = data.weather[0].main;
        imagesIcon.setAttribute('src', imageUrl )
        console.log(data);
    })
    })
    
