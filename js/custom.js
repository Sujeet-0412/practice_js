/*Name this external file gallery.js*/

function upDate(previewPic){
  x = document.getElementById('image');
  x.style.color = "#FFFFFF";
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage = `url(${previewPic.src})`;
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
	}

function unDo(){
     x = document.getElementById('image');
     x.style.color = "#FFFFFF";
     x.innerHTML = "Hover over an image below to display here.";
     x.style.backgroundImage = "none";
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	}

window.onload = function() {
  let previews = document.querySelectorAll("img"); // or use a specific class
  previews.forEach(function(pic) {
    pic.setAttribute("tabindex", "0");   // make focusable
    pic.addEventListener("focus", function() {
      upDate(pic);
    });
    pic.addEventListener("blur", function() {
      unDo();
    });
  });
};
