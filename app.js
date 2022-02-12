const fuerteTrip = '15 February 2022 9:10';

function countdown(){
    const fuerteTripDate = new Date(fuerteTrip);
    const currentDate = new Date();

    const totalSeconds = (fuerteTripDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor((totalSeconds / 60) %60) ;
    const seconds = Math.floor(totalSeconds % 60);

    console.log(days, hours, minutes, seconds);
    
}

//initial call

countdown()

setInterval(countdown, 1000);