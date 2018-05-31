	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/img_52.jpg",
        		"./img/ken_burns/img_75.jpg",
                "./img/ken_burns/img_61.jpg",
                "./img/ken_burns/img_23.jpg",
                "./img/ken_burns/img_35.jpg",
                "./img/ken_burns/img_76.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
