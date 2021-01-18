// Creating Array Objects
const allAudio = {audio: [
    {title:'About Me', 
    link: 'https://gitlab.com/isteah.jdessources/audio-1/-/raw/master/1%20About%20Me.mp3', 
    cont: 'controls'},
    
    {title: 'My Pets', 
    link: 'https://gitlab.com/isteah.jdessources/audio-1/-/raw/master/3%20My%20Pets.mp3', 
    cont: 'controls'},
    
    {title: 'My Favorite Season', 
    link: 'https://gitlab.com/isteah.jdessources/audio-1/-/raw/master/26%20My%20Favorite%20Season.mp3', 
    cont: 'controls'},
    
    {title: 'Last Night', 
    link: 'https://gitlab.com/isteah.jdessources/audio/-/raw/main/2%20A%20Late%20Night.mp3', 
    cont: 'controls'}
]   
};
// import { allAudio } from "audioObject";

let audioInfo = allAudio['audio']; // allAudio.audio

// Loop through the array object
for (let i = 0, len=audioInfo.length; i < len; i++) {
    // console.log(audioInfo[i].title); 
    // console.log(audioInfo[i].link); 
    
    // Creating HTML Elements
    const myParent = document.getElementById("foo");
    const myInnerAnchor = document.createElement("p");
    const breakElement = document.createElement("br");
    const audioElement = document.createElement("audio");
    
        // Setting Elements
    myInnerAnchor.textContent = audioInfo[i].title
    // myInnerAnchor.href = audioInfo[i].link;
    audioElement.controls= audioInfo[i].cont;
    audioElement.src = audioInfo[i].link
    
    //Appened all the elements
    myParent.append(myInnerAnchor, audioElement, breakElement);
   
}

// Prevent many audio from playing at the same times
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);