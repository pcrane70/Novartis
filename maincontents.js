


var speak = new Array( );


function LanguageChange(lang)
{
    if(lang === "english")
    {
        window.external.ChangeLanguage("en-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "#ffffff";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "#ffffff";

        
        // document.getElementById("vote-title").innerHTML = "Vote for who will win?";

        speak[0] = "Learn about our great healthcare offerings";
        speak[1] = "Find your way around the terminal.";
        speak[2] = "Here are some ways to get you where you want to go!";
        speak[3] = "Enjoy some food at our restaurants.";
        speak[4] = "Take some time to shop at our great stores.";
        speak[5] = "Find out more features our airport offers.";
        speak[6] = "Press the button on my screen and strike a pose!";
        speak[7] = "Say Cheese! You are about to become a robot.";
        speak[8] = "Click a Song Below to Make the Robot Dance";
        

    }
    else if (lang === "spanish")
    {
        /*window.external.ChangeLanguage("es-us");
        eraseCookie("CurrentLanguage");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "#ffffff";
        document.getElementById("btn_spanish").style.backgroundColor = "#ffffff";
        document.getElementById("btn_spanish").style.color = "#FF6600";

        
        // document.getElementById("vote-title").innerHTML = "Vote por quién ganará?";


        speak[0] = "Disfruta de tu tiempo en algunos de nuestros excelentes restaurantes.";
        speak[1] = "Pase tiempo en algunas de nuestras tiendas.";
        speak[2] = "Toca el icono de la cámara a continuación y ¡Di queso!";
        speak[3] = "Sonríe, estás a punto de convertirte en un robot.";*/
    }

}
        speak[0] = "Novartis is seeing opportunity in ophthalmology ";
        speak[1] = "Novartis is committed to finding the right solution for you.";
        speak[2] = "Novartis has pioneered treatments for many retinal diseases.";
        speak[3] = "Read a welcome message from our dean.";
        speak[4] = "Find out what classes you need for your major.";
        speak[5] = "";
        speak[6] = "Say Cheese! ";
        speak[7] = "Smile! You are about to become a robot.";
        speak[8] = "Pick a song and let’s boogie!";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
   
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "Info":
            PlaySpeech(speak[0]);
            location.href = "Contents/Info/index.html";
            break;
        case "Videos":
            PlaySpeech(speak[1]);
            location.href = "Contents/Video/index.html";
            break;
        case "Mirrax":
            PlaySpeech(speak[2]);
            location.href = "Contents/Mirrax/index.html";
            break;
        

        case "Selfie":
            PlaySpeech(speak[6]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Avatar":
            PlaySpeech(speak[7]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            PlaySpeech(speak[8]);
            location.href = "Contents/Dance/index.html";
            break;
        case "Config":
            location.href = "Config/Config.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall


function votePress(team) {
    var i;
    switch (team)
    {
        case "t1":
            if(readCookie("team1")=== null)
            {i = 0;}
                i = readCookie("team1");
                i++;
                writeCookie("team1", i.toString(), 30);
                document.getElementById("t1-vote").innerHTML = i.toString();
            break;
        case "t2":
            if(readCookie("team2")=== null)
            {i = 0;}
            i = readCookie("team2");
            i++;
            writeCookie("team2", i.toString(), 30);
            document.getElementById("t2-vote").innerHTML = i.toString();
            break;
        case "t3":
            if(readCookie("team3")=== null)
            {i = 0;}
            i = readCookie("team3");
            i++;
            writeCookie("team3", i.toString(), 30);
            document.getElementById("t3-vote").innerHTML = i.toString();
            break;
        case "t4":
            if(readCookie("team4")=== null)
            {i = 0;}
            i = readCookie("team4");
            i++;
            writeCookie("team4", i.toString(), 30);
            document.getElementById("t4-vote").innerHTML = i.toString();
            break;
    } // end switch
} // end votepress()

function voteInit() {
    document.getElementById("t1-vote").innerHTML = readCookie("team1").toString();
    document.getElementById("t2-vote").innerHTML = readCookie("team2").toString();
    document.getElementById("t3-vote").innerHTML = readCookie("team3").toString();
    document.getElementById("t4-vote").innerHTML = readCookie("team4").toString();
}

function OnUserApproached()
{
    PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

$(document).ready(function(){



    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Fairfield, CT";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });



}, 2000);



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi, my name is tracey, nice to meet you. Thank you for having me here at Novartis.");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Hi!");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Nice to meet you");
    }
    if(btn_info[3] == '1'){
       window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hello Andreas and Scott, nice to meet you! Thanks for letting me visit.");
        
    }
}