    let projectBox1 = document.getElementById("project-box1");
    let projectBox2 = document.getElementById("project-box2");
    let projectBox3 = document.getElementById("project-box3");

    let title1 = document.getElementById("title1");
    let title2 = document.getElementById("title2");
    let title3 = document.getElementById("title3");

    let modal1 = document.getElementById('modal1');
    let modal2 = document.getElementById('modal2');
    let modal3 = document.getElementById('modal3');

    let close = document.getElementsByClassName("close");
        
    // When the user clicks the projectBox, open the modal 
    projectBox1.onclick = function() {
        modal1.style.display = "block";
    }
    projectBox2.onclick = function() {
        modal2.style.display = "block";
    }
    projectBox3.onclick = function() {
        modal3.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";

        }
    }
    // Focus effect when hovering over projects 
    projectBox1.addEventListener("mouseover", function(){
        projectBox2.style.opacity = ".35";
        projectBox3.style.opacity = ".35";
        title1.style.color = "steelblue";
    });
    projectBox1.addEventListener("mouseout", function(){
        projectBox2.style.opacity = "1";
        projectBox3.style.opacity = "1";
        title1.style.color = "white";
    });

    projectBox2.addEventListener("mouseover", function(){
        projectBox1.style.opacity = ".35";
        projectBox3.style.opacity = ".35";
        title2.style.color = "steelblue";
    });
    projectBox2.addEventListener("mouseout", function(){
        projectBox1.style.opacity = "1";
        projectBox3.style.opacity = "1";
        title2.style.color = "white";
    });

    projectBox3.addEventListener("mouseover", function(){
        projectBox1.style.opacity = ".35";
        projectBox2.style.opacity = ".35";
        title3.style.color = "steelblue";
    });
    projectBox3.addEventListener("mouseout", function(){
        projectBox1.style.opacity = "1";
        projectBox2.style.opacity = "1";
        title3.style.color = "white";
    });   