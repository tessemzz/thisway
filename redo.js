var dropdownvisible = false;
var pageWidth1 = $(window).width(); // returns width of browser viewport
var pageHeight1 = $(window).height(); // returns height of browser viewport

var sideBarWidth = 0;
var seasonHiddenLeft = 0;
var seasonSep = 0;

var season1Width = 0;
var season2Width = 0;
var season3Width = 0;
var season4Width = 0;

var season1 = null;
var season2 = null;
var season3 = null;
var season4 = null;

var fallColors = ["#F2A420", "#D75F1B", "#AFAD3C", "#086278"];
var winterColors = ["#A3B9C9", "#A09CB0", "#987D7C", "#776D5A"];
var springColors = ["#8DCFCA", "#6ED66B", "#E0AD59", "#D68037"];
var summerColors = ["#01DDDD", "#E0E300", "#FD8A5E", "#FF598F"];

window.onload = function() {
    showDropdown(0);
    //fadePhotosIn();
    initSeasons();
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
    document.getElementById("dropdowndiv").style.top = "-11%";
    dropdownvisible = false;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidebardiv").style.margin = "0";
    document.getElementById("sidebartable").style.margin = "auto";
    document.getElementById("open").style.opacity = "0";
    //debugger;
    setTimeout(function() {
        var left1 = season1.style.left.slice(0, -2);
        var left2 = season2.style.left.slice(0, -2);
        var left3 = season3.style.left.slice(0, -2);
        var left4 = season4.style.left.slice(0, -2);

        season1.style.left = (parseInt(left1) + sideBarWidth) + "px";
        season2.style.left = (parseInt(left2) + sideBarWidth) + "px";
        season3.style.left = (parseInt(left3) + sideBarWidth) + "px";
        season4.style.left = (parseInt(left4) + sideBarWidth) + "px";
    }, 700);

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    season1.style.left = ((season1Width + 1) * -1) + "px";
    season2.style.left = ((season2Width + 1) * -1) + "px";
    season3.style.left = ((season3Width + 1) * -1) + "px";
    season4.style.left = (season4Width * -1) + "px";

    setTimeout(function() {
        document.getElementById("sidebardiv").style.margin = "0 0 0 -200px";
        document.getElementById("sidebartable").style.margin = "0 0 0 -400px";
        document.getElementById("open").style.opacity = "1";
    }, 1);
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

function initSeasons() {
    var height = document.getElementById("titlediv").clientHeight;
    sideBarWidth = document.getElementById("sidebardiv").clientWidth;

    season1 = document.getElementById("season1");
    season2 = document.getElementById("season2");
    season3 = document.getElementById("season3");
    season4 = document.getElementById("season4");

    season1.style.width = (pageWidth1 - sideBarWidth) + "px";
    season1.style.height = pageHeight1 + "px";
    season1.style.top = height + "px";

    season1Width = parseInt(season1.style.width.slice(0, -2));

    seasonSep = season1Width / 4;

    season1.style.left = (season1Width * -1) + "px";

    season2.style.width = (season1Width - seasonSep) + "px";
    season3.style.width = (season1Width - (seasonSep * 2)) + "px";
    season4.style.width = (season1Width - (seasonSep * 3)) + "px";
    season2.style.height = pageHeight1 + "px";
    season3.style.height = pageHeight1 + "px";
    season4.style.height = pageHeight1 + "px";
    season2.style.top = height + "px";
    season3.style.top = height + "px";
    season4.style.top = height + "px";

    season2Width = parseInt(season2.style.width.slice(0, -2));
    season3Width = parseInt(season3.style.width.slice(0, -2));
    season4Width = parseInt(season4.style.width.slice(0, -2));

    season2.style.left = ((season2Width + 1) * -1) + "px";
    season3.style.left = ((season3Width + 1) * -1) + "px";
    season4.style.left = (season4Width * -1) + "px";
}

function openSeason(season) {
    var leftStr = sideBarWidth + "px";

    switch (season) {
        case "fall":
            season1.style.backgroundColor = fallColors[0];
            season2.style.backgroundColor = fallColors[1];
            season3.style.backgroundColor = fallColors[2];
            season4.style.backgroundColor = fallColors[3];
            break;
        case "winter":
            season1.style.backgroundColor = winterColors[0];
            season2.style.backgroundColor = winterColors[1];
            season3.style.backgroundColor = winterColors[2];
            season4.style.backgroundColor = winterColors[3];
            break;
        case "spring":
            season1.style.backgroundColor = springColors[0];
            season2.style.backgroundColor = springColors[1];
            season3.style.backgroundColor = springColors[2];
            season4.style.backgroundColor = springColors[3];
            break;
        case "summer":
            season1.style.backgroundColor = summerColors[0];
            season2.style.backgroundColor = summerColors[1];
            season3.style.backgroundColor = summerColors[2];
            season4.style.backgroundColor = summerColors[3];
            break;
    }


    $("#season1").animate({
        left: leftStr
    }, 1000, function() {});
    $("#season2").animate({
        left: leftStr
    }, 1000, function() {});
    $("#season3").animate({
        left: leftStr
    }, 1000, function() {});

    $("#season4").animate({
        left: leftStr
    }, 1000, function() {});


}