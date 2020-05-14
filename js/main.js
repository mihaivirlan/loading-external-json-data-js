// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'data.json', true);
// xhr.responseType = 'text';
// xhr.send();

// xhr.onreadystatechange = function() {
//     console.log(xhr.readyState);
//     console.log(xhr.status);
//     console.log(xhr.statusText);
// } // end onreadystatechange function

// xhr.onload = function() {
//     if (xhr.status === 200) {
//         var myStuff = JSON.parse(xhr.responseText);
//         console.log(myStuff);
//     } // eend if
// } // end onload function
// xhr.send();



var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function() {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    } // eend if
} // end onload function
xhr.send();