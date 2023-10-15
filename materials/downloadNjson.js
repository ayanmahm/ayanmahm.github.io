// downloadNjson.js

function downloadFile() {
    // Create an anchor element
    var a = document.createElement("a");
    
    // Set the href attribute to the file you want to download
    a.href = "notionEnhancer-gmb.json";
    
    // Set the download attribute with the desired file name
    a.download = "notionEnhancer-gmb.json";
    
    // Trigger a click event on the anchor element to start the download
    a.click();
}
// downloadNjson.js

function downloadFileKCL() {
    // Create an anchor element
    var b = document.createElement("b");
    
    // Set the href attribute to the file you want to download
    b.href = "notion-enhancer_KCL.json";
    
    // Set the download attribute with the desired file name
    b.download = "notion-enhancer_KCL.json";
    
    // Trigger a click event on the anchor element to start the download
    b.click();
}
