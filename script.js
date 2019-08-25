var morning = 7;
var noon = 12;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own 
var updateClock = function()
{
  var time = new Date().getHours();

  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";


  var backImage = document.getElementById('backImage');

  if (time == morning)
  {
    image = "https://images.pexels.com/photos/1385250/pexels-photo-1385250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  }
  else if (time == noon)
  {
    image = "https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  }

  else if (time < noon)
  {
    image = "https://images.pexels.com/photos/1385250/pexels-photo-1385250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  }
  else if (time >= evening)
  {
    image = "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  }
  else
  {
    image = "https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  }



  backImage.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
