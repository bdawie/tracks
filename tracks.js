(function(){
    let tracks=[
    {
        id:1230,
        params:{
            name:'track1',
            genre:'techno'
        }
       
    },
    {
        id:1232,
        params:{
            name:'track2',
            genre:'house'
        }
    }
]

tracks.forEach((track)=>{
    if(track.id===1230) track.params.length=5.47;
});

tracks.forEach((track)=>{
    console.log(track.params.name);
});

})()
