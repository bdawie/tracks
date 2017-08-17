(function(){
    let tracks={
        1230:{
            name:'track1',
            genre:'techno'
        }
    }
    
    tracks['1232']={
        name:'track2',
        genre:'house'
    }
    tracks['1230'].length=5.47;

    for(id in tracks){
        if(tracks.hasOwnProperty(id)){
            console.log(`Id:${id} with name: ${tracks[id].name}`);   
        }
    }
    
})()
