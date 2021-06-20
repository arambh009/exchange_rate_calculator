/*  Note:-  to run a perticular section uncomment things in it.Error
            to run async and await section just comment out section 2 and lines 95 to 103.
*/



//-------------------- PROMISES--------------------------------------
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve({you:'did'});
        reject(new Error('rejected'));
    },2000);
});

promise.then(user=>{
    console.log(user);
}).catch(err=>console.log(err.message));

//------------------------- CALLBACK FUNCTIONS--------------------------
/*function getUser(username,email,callback){
    setTimeout(()=>{
        console.log('got data');
        callback({userEmail:email});
    },2000)
}
function getVideo(email,callback){
    setTimeout(()=>{
        callback(['video1','video2','video3']);
    },1000);
}
function getTitle(video, callback){
    //console.log(video.length);
    callback(titleList(video));
}
function titleList(video){
   
    switch(video){
        case'video1':return 'maharaj';
        case'video2':return 'bcs';
        default: return 'title not available';
    }
}

let user=getUser('arc','arc@gmail.com',user=>{
    console.log(user);
    getVideo(user.email,video=>{
        console.log(video);
        video.forEach(
            x=>{
                getTitle(x,title=>{
                    console.log(title);
                });
            }
        );
    })

});*/

//------------------- Above CallBack converted to PROMISES------------------
function getUser(username,email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('got data');
            resolve({userEmail:email});
            },2000
        );
    });
}

function getVideo(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3']);
        },1000);
    });
    
}
function getTitle(video){
   
    return new Promise((resolve,reject)=>{
        resolve(titleList(video));
        reject(new Error('title not found'));
    });
    
}
function titleList(video){
   
    switch(video){
        case'video1':return 'maharaj';
        case'video2':return 'bcs';
        default: return 'title not available';
    }
}

// const user=getUser('arc','arc@gmail.com');
// user.then(user=>getVideo(user.email))
// .then(videos=>{
//     videos.forEach(x => {
//         console.log(getTitle(x));
        
//     });

// });

//------------------- ASYNC and AWAIT (Writing asynchronus code in synchronous way )--------------
async function displayUser(){
    const user= await getUser('arc','arc@gmail.com');
    const videos=await getVideo(user.userEmail);
    videos.forEach(e => {
        console.log(getTitle(e));
    });
}
displayUser();