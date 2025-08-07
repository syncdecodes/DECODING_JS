// cllbacks -:
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;

    script.onload = function(){
        console.log("script loaded " + src)
        // means when the script loads console.log(.....)
        callback(null, src);
        // the callback function ensures that the goodmorning and hello functions starts when the script gets loaded 
    }
    script.onerror = function(){
        console.log("error loading javascript programme : " + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(src){
    alert("hello world"+ src)
}
// we created a function hello which alerts hello world 

function goodmorning(error, src){
    if (error){
        console.log(error);
        return
    }
    alert("good morning "+ src)
}
// similarly we created a function goodmorning

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", goodmorning) 
// loadscript (url, goodmorning) means when the javascript gets loaded run the goodmorning function

// => error handling - important