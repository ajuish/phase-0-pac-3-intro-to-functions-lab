function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(shout(string));
}

function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string){
    if (string === whisper(string)){
        return string = "I can't hear you!";
    }
        else if (string === shout(string)){
            return string = "YES INDEED!";
        }
        else if (string === "Let's have dinner together!"){
            return string = "I would love to!"
        }
}