var dropdownvisible = false;

window.onload = function() {
    showDropdown(0);
    fadePhotosIn();
};

window.onresize = function() {
    if (dropdownvisible) {
        showDropdown();
    }
}

function fadePhotosIn() {
    fadeImageIn("#photo1", 83);
    setTimeout(function() {
        fadeImageIn("#photo2", 297);
        setTimeout(function() {
            fadeImageIn("#photo3", 142);
            setTimeout(function() {
                fadeImageIn("#photo4", 259);
            }, 250);
        }, 250);
    }, 250);
}

function fadeImageIn(photoId, top) {
    var topStr = top + 'px'
    $(function() {
        $(photoId).animate({
            opacity: '1'
        }, {
            duration: 500,
            queue: false
        });

        $(photoId).animate({
            top: topStr
        }, {
            duration: 500,
            queue: false
        });
    });

}

function showDropdown(num) {
    if (num != 0) {
        var height = document.getElementById("titlediv").clientHeight;
        var width = document.getElementById("dropdowncenter").clientWidth;
        document.getElementById("dropdowndiv").style.top = height + "px";
        document.getElementById("dropdowndiv").style.width = width + "px";
        dropdownvisible = true;
    } else {
        var width = document.getElementById("dropdowncenter").clientWidth;
        document.getElementById("dropdowndiv").style.width = width + "px";
        num++;
    }
}

function hideDropdown() {
    document.getElementById("dropdowndiv").style.top = "-10%";
    dropdownvisible = false;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidebardiv").style.margin = "0";
    document.getElementById("sidebartable").style.margin = "auto";
    document.getElementById("open").style.opacity = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidebardiv").style.margin = "0 0 0 -200px";
    document.getElementById("sidebartable").style.margin = "0 0 0 -400px";
    document.getElementById("open").style.opacity = "1";
}

function openAboutUs() {
    var oAboutUsBckgrnd = document.getElementById("aboutUsBckgrnd");
    var oAboutUsContainer = document.getElementById("aboutUsContainer");

    oAboutUsBckgrnd.style.opacity = "0";
    oAboutUsContainer.style.opacity = "0";
    oAboutUsBckgrnd.style.visibility = "visible";
    oAboutUsContainer.style.visibility = "visible";

    fadeAboutUsIn();
}

function fadeAboutUsIn() {
    $(function() {
        $("#aboutUsBckgrnd").animate({
            opacity: '0.8'
        }, {
            duration: 500,
            queue: false
        });

        $("#aboutUsContainer").animate({
            opacity: '1'
        }, {
            duration: 500,
            queue: false
        });
    });

}

function closeAboutUs() {
    var oAboutUsBckgrnd = document.getElementById("aboutUsBckgrnd");
    var oAboutUsContainer = document.getElementById("aboutUsContainer");

    fadeAboutUsOut();

    setTimeout(function() {
        oAboutUsBckgrnd.style.opacity = "0";
        oAboutUsContainer.style.opacity = "0";
        oAboutUsBckgrnd.style.visibility = "hidden";
        oAboutUsContainer.style.visibility = "hidden";
    }, 1000);
}

function fadeAboutUsOut() {
    $(function() {
        $("#aboutUsBckgrnd").animate({
            opacity: '0'
        }, {
            duration: 500,
            queue: false
        });

        $("#aboutUsContainer").animate({
            opacity: '0'
        }, {
            duration: 500,
            queue: false
        });
    });

}

function hoverOnClose() {
    var close = document.getElementById("aboutUsClose");

    close.style.color = "red";
}

function hoverOffClose() {
    var close = document.getElementById("aboutUsClose");

    close.style.color = "black";
}