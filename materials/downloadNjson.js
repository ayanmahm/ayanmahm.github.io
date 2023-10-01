// downloadNjson.js

function downloadFile() {
    // Create an anchor element
    var a = document.createElement("a");
    
    // Set the href attribute to the file you want to download
    a.href = "011023notionEnhancer.json";
    
    // Set the download attribute with the desired file name
    a.download = "011023notionEnhancer.json";
    
    // Trigger a click event on the anchor element to start the download
    a.click();
}
