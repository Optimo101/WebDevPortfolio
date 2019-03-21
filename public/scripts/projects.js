    let projectBox1 = document.getElementById("project-box1");
    let projectBox2 = document.getElementById("project-box2");
    let projectBox3 = document.getElementById("project-box3");
    let title1 = document.getElementById("title1");
    let title2 = document.getElementById("title2");
    let title3 = document.getElementById("title3");


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