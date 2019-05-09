    let projectBox1 = document.getElementById("project-box1");
    let projectBox2 = document.getElementById("project-box2");
    let projectBox3 = document.getElementById("project-box3");

    let title1 = document.getElementById("title1");
    let title2 = document.getElementById("title2");
    let title3 = document.getElementById("title3");

    let summary1 = document.getElementById("summary1");
    let summary2 = document.getElementById("summary2");
    let summary3 = document.getElementById("summary3");


    let modal1 = document.getElementById('modal1');
    let modal2 = document.getElementById('modal2');
    let modal3 = document.getElementById('modal3');

    let close = document.getElementsByClassName("close");

    let modalButton1 = document.getElementById("modal-button1");
    let modalButton2 = document.getElementById("modal-button2");
    let modalButton3 = document.getElementById("modal-button3");

    let viewSiteIcon1 = document.getElementById("view-site-icon1");
    let viewSiteIcon2 = document.getElementById("view-site-icon2");
    let viewSiteIcon3 = document.getElementById("view-site-icon3");
        
    // When the user clicks the projectBox, open the modal and begin slideshow
    projectBox1.onclick = function() {
        modal1.style.display = "block";

        $("#slideshow1 > div:gt(0)").hide();
        setInterval(function() { 
        $('#slideshow1 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow1');
        },  3000);
    }
    projectBox2.onclick = function() {
        modal2.style.display = "block";

        $("#slideshow2 > div:gt(0)").hide();
        setInterval(function() { 
        $('#slideshow2 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow2');
        },  3000);
    }
    projectBox3.onclick = function() {
        modal3.style.display = "block";

        $("#slideshow3 > div:gt(0)").hide();
        setInterval(function() { 
        $('#slideshow3 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow3');
        },  3000);
    }

    // when the user hovers over 'View Site' button scale icon larger
    modalButton1.addEventListener("mouseover", function(){
        viewSiteIcon1.style.transform = "scale(1.4) translate(4px,-2px)";
    })
    modalButton1.addEventListener("mouseout", function(){
        viewSiteIcon1.style.transform = "scale(1)";
    });

    modalButton2.addEventListener("mouseover", function(){
        viewSiteIcon2.style.transform = "scale(1.4) translate(4px,-2px)";
    })
    modalButton2.addEventListener("mouseout", function(){
        viewSiteIcon2.style.transform = "scale(1)";
    });

    modalButton3.addEventListener("mouseover", function(){
        viewSiteIcon3.style.transform = "scale(1.4) translate(4px,-2px)";
    })
    modalButton3.addEventListener("mouseout", function(){
        viewSiteIcon3.style.transform = "scale(1)";
    });

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
        projectBox2.style.opacity = ".6";
        projectBox3.style.opacity = ".6";
        title1.style.fontWeight = "700";
    });
    projectBox1.addEventListener("mouseout", function(){
        projectBox2.style.opacity = "1";
        projectBox3.style.opacity = "1";
        title1.style.fontWeight = "400";
    });

    projectBox2.addEventListener("mouseover", function(){
        projectBox1.style.opacity = ".6";
        projectBox3.style.opacity = ".6";
        title2.style.fontWeight = "700";
    });
    projectBox2.addEventListener("mouseout", function(){
        projectBox1.style.opacity = "1";
        projectBox3.style.opacity = "1";
        title2.style.fontWeight = "400";
    });

    projectBox3.addEventListener("mouseover", function(){
        projectBox1.style.opacity = ".6";
        projectBox2.style.opacity = ".6";
        title3.style.fontWeight = "700";
    });
    projectBox3.addEventListener("mouseout", function(){
        projectBox1.style.opacity = "1";
        projectBox2.style.opacity = "1";
        title3.style.fontWeight = "400";
    });