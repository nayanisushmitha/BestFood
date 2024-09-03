var setCategoryClicksBackup = function() {
    $(".categoryButton").unbind();
    $('.categoryButton').click(function(){
        // let offsetHeight = document.getElementById('galleryRowContainer').offsetHeight.toString() + 'px';
        var value = $(this).attr('data-filter');
        // $('#galleryRowContainer').css({'min-height':offsetHeight}); 

        // setTimeout(function(){
        //     $('#galleryRowContainer').animate({'min-height':'0'});
        // },3000)

        if (value === 'all') {
            $('.categoryFilter').show('1000');
            $(this).addClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
        } else if ($(this).hasClass('categoryButtonSelected')) {
            $('.categoryFilter').show('1000');
            $(this).removeClass('categoryButtonSelected');
            $('.allCategoryButton').addClass('categoryButtonSelected');
        }
        else {
            $('.categoryFilter').not('.' + value).hide('3000');
            $('.categoryFilter').filter('.' + value).show('3000');
            $('.allCategoryButton').removeClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
            $(this).toggleClass('categoryButtonSelected');
        }
    });

    $("a[rel=scrollGroup]").fancybox({
        'transitionIn'		: 'fade',
        'transitionOut'		: 'fade',
        'titlePosition' 	: 'over',
        'type'              : 'image',
        'titleFormat'		: function(title) {
            return '<span id="fancybox-title-over">' + title + '';
        }
    });
}
$(document).ready(function() {
    $('nav').fadeIn();
});

// script start 
$.browser = {}; $.support.opacity = true;
// script end
var setCategoryClicks = function() {
    $(".categoryButton").unbind();
    $('.categoryButton').click(function(){
        // let offsetHeight = document.getElementById('galleryRowContainer').offsetHeight.toString() + 'px';
        var value = $(this).attr('data-filter');
        // $('#galleryRowContainer').css({'min-height':offsetHeight}); 

        // setTimeout(function(){
        //     $('#galleryRowContainer').animate({'min-height':'0'});
        // },3000)

        if (value === 'all') {
            $('.categoryFilter').show('1000');
            $(this).addClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
        } else if ($(this).hasClass('categoryButtonSelected')) {
            $('.categoryFilter').show('1000');
            $(this).removeClass('categoryButtonSelected');
            $('.allCategoryButton').addClass('categoryButtonSelected');
        }
        else {
            $('.categoryFilter').not('.' + value).hide('3000');
            $('.categoryFilter').filter('.' + value).show('3000');
            $('.allCategoryButton').removeClass('categoryButtonSelected');
            $('.categoryButton').not(this).removeClass('categoryButtonSelected');
            $(this).toggleClass('categoryButtonSelected');
        }
    });
    
    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){
        
        $(this).removeClass('transition');
    });

    $("a[rel=scrollGroup]").fancybox({
        'transitionIn'		: 'fade',
        'transitionOut'		: 'fade',
        'titlePosition' 	: 'inside',
        'type'              : 'image',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">' + title + '</span>';
        }
    });
}
$(document).ready(function(){
    setCategoryClicks();
});

// script start
$(document).ready(function() {

    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});
// script end
// script start
$(document).ready(function() {
    setTimeout(function() {
        initializeCarousel();
    }, 3000);
});

var initializeCarousel = function() {
    /*if (window.parent === window.self) {
        $('#quote-carousel').data('bs.carousel').options.interval = 6000;
    } else {*/
        //$('#quote-carousel').data('bs.carousel').options.interval = 10000;
        $('#quote-carousel').carousel('pause'); 
        setInterval(function() {
            $('#quote-carousel').carousel('pause'); 
        }, 10000);
    //} 
}
// script end

// script start
$(document).ready(function() {
    setTimeout(function() {
        checkBlogStatus();
    }, 1000);
});

var checkBlogStatus = function() {
    if (document.getElementsByClassName('blogPost').length === 0 || (document.getElementsByClassName('blogPost').length === 1 && document.getElementsByClassName('blogPost')[0].innerHTML.trim() === '')) {
        document.getElementById('noPostBlog').style.display = '';
    }
}
// script end

var scriptElement = document.getElementById("generalJS");

// Now, you can access and manipulate the script element as needed
console.log(scriptElement);
    $(document).ready(function() {
        loadLeiaAd();
        initializeSmoothScroll();
        if (window.self !== window.top) {
            if (document.getElementById('menuOverlaySection')) {
                document.getElementById('menuOverlaySection').style.height = window.parent.innerHeight.toString() + 'px';
            }
            
            if (document.getElementById('menuBorder')) {
                document.getElementById('menuBorder').style.maxHeight = window.parent.innerHeight.toString() + 'px';
            }
            
            if (window.orientation !== undefined && document.getElementById('headerBackgroundVideo')) {
                updateBgimageSizes();
                window.addEventListener('orientationchange', function() {
                    updateBgimageSizes();
                });
            }
        } else if (document.getElementById('newsletterOuter') && document.getElementById('newsletterOuter').getAttribute('enabled') === 'true') {
            var time = parseInt(document.getElementById('newsletterOuter').getAttribute('delay'));
            if (time > 0) {
                setTimeout(function() {
                    $('#newsletterOuter').css('opacity', '0');
                    $('#newsletterOuter').css('display', '');
                    $('#newsletterOuter').animate({opacity: '1'}, 1000);
                }, time);
            }
        }
    });
    
    var initializeSmoothScroll = function() {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        });
    }
    
    var updateBgimageSizes = function() {
        document.getElementById('headerBackgroundVideo').style.height = document.getElementById('headerContainer').offsetHeight.toString() + 'px';
    }

    var loadLeiaAd = function() {
        /*$.ajax({
            url: 'https://heyleia.com/php/getAdStatus.php',
            type: 'GET',
            data: {'domain': window.location.hostname},
            success: function(type) {
                if (type === 'ad') {
                    addLeiaAd();
                }
            },
            error: function(err) {
                console.log(err);
            }
        });*/
    }
    
    var meetingToken;
    var submitVideoChat = function() {
        var name = document.getElementById('videoName').value;
        var email = document.getElementById('videoEmail').value;

        document.getElementById('launchChatButton').disabled = true;

        var spinner = document.createElement('div');
        var outer = document.createElement('div');

        outer.id = 'spinnerLoading';
        spinner.className = 'spinnerLoading';
        outer.style.background = 'rgba(0,0,0,0.7)';
        outer.style.borderRadius = '20px';
        outer.style.position = 'fixed';
        outer.style.left = ((window.innerWidth - 205) / 2).toString() + 'px';
        outer.style.width = '205px';
        outer.style.top = '30%';
        outer.style.height = '205px';
        outer.style.zIndex = '10000';
        spinner.style.marginLeft = '42.5px';
        spinner.style.marginTop = '42.5px';
        outer.appendChild(spinner);
        document.body.appendChild(outer);

        if (!addedSpinner) {
            addedSpinner = true;
            addSpinnerStyle();
        }

        $.ajax({
            url: 'https://heyleia.com/php/scheduleMeeting.php',
            type: 'POST',
            data: {name: name, email: email, partner: ''},
            success: function(data) {
                meetingToken = data;
                document.getElementById('launchChatButton').disabled = false;
                swal('Meeting Ready', 'Click the "Launch Meeting" button to start your video chat.', 'success');
                document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
            },
            error: function(err) {
                console.log(err);
                swal('Uh Oh', 'There was an error scheduling your live chat. Please try again in a few minutes!', 'error');
                document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
            }
        })
    }

    var launchVideoChat = function() {
        window.open('https://leia-vvfxwcp3stob6juil9qgxyjxx.braidio.com/meetings/' + meetingToken, '_blank');
    }

    var showVideo = function() {
        document.getElementById('videoChatOverlay').style.display = '';
    }

    var closeVideo = function() {
        document.getElementById('videoChatOverlay').style.display = 'none';
    }
    
    var shownSchedule = false;
    var showSchedule = function() {
        document.getElementById('schedulingOverlay').style.display = '';
        
        if (shownSchedule) {
            var frame = document.getElementById('schedulingOverlay').getElementsByTagName('iframe')[0];
            var src = frame.getAttribute('src').split('&v')[0];
            frame.setAttribute('src', src + '&v=' + new Date().getTime());
        }
        
        shownSchedule = true;
    }
    
    var closeSchedule = function() {
        document.getElementById('schedulingOverlay').style.display = 'none';
    }

    var addLeiaAd = function() {
        var img = document.createElement('img');
        var tag = document.createElement('a');
        img.id = 'leiaAdLogo';
        tag.id = 'leiaAdLogoA';
        img.setAttribute('src', 'https://heyleia.com/images/poweredBy.png');

        if (window.self === window.top && window.location.search !== '?site=live') {
            tag.setAttribute('href', 'https://heyleia.com/direct?src=site');
            tag.setAttribute('target', '_blank');
        } else {
            img.onclick = function() {
                if (window.location.search === '?site=live') {
                    swal('Remove Leia Ad', 'You can remove this ad by upgrading to Leia Pro! This includes hosting and everything else you need for your site.', 'info');
                } else {
                    swal({
                        title: 'Remove Leia Ad',
                        text: 'You can remove this ad by upgrading to Leia Pro! This includes hosting and everything else you need for your site.',
                        type: 'info',
                        icon: 'info',
                        closeOnClickOutside: true,
                        showCancelButton: true,
                        buttons: {
                            cancel: 'Not Now',
                            submit: {
                                text: 'Learn More',
                                value: 'learn',
                            }
                        },
                        closeOnConfirm: true
                    }).then(function(isConfirm) {
                        if (isConfirm == 'learn') {
                            window.open('https://heyleia.com/upgrade', '_blank');
                        } 
                    }); 
                }
            }
        }

        tag.appendChild(img);
        document.body.appendChild(tag);
    }
    
    var mainColor = 'rgb(129,55,114)';
    
    var applyFancyTop = function(top) {
        if (document.getElementById('fancyStyle')) {
            document.getElementById('fancyStyle').parentElement.removeChild(document.getElementById('fancyStyle'));
        }
        
        var style = document.createElement('style');
        style.id = 'fancyStyle';
        var txt = document.createTextNode('#fancybox-wrap {top: ' + top.toString() + 'px !important;}');
        style.appendChild(txt);
        document.body.appendChild(style);
    }
    
    var addedSpinner = false;
    var submitContactForm = function() {
        swal("Are you sure you want to submit this message?", {
            buttons: {
                no: {
                    text: "Cancel",
                    value: "Cancel",
                    className: 'swal-button swal-button--cancel',
                    closeModal: false,
                },
                yes: {
                    text: "Submit",
                    value: "ok"
                },
            },
            title: 'Confirmation',
            type: 'info',
            icon: 'info'
        }).then((value) => {
            if (value === 'Cancel') {
                swal.close();
            } else {
                var spinner = document.createElement('div');
                var outer = document.createElement('div');

                outer.id = 'spinnerLoading';
                spinner.className = 'spinnerLoading';
                outer.style.background = 'rgba(0,0,0,0.7)';
                outer.style.borderRadius = '20px';
                outer.style.position = 'fixed';
                outer.style.left = ((window.innerWidth - 205) / 2).toString() + 'px';
                outer.style.width = '205px';
                outer.style.top = '30%';
                outer.style.height = '205px';
                outer.style.zIndex = '10000';
                spinner.style.marginLeft = '42.5px';
                spinner.style.marginTop = '42.5px';
                outer.appendChild(spinner);
                document.body.appendChild(outer);

                if (!addedSpinner) {
                    addedSpinner = true;
                    addSpinnerStyle();
                }

                var dataObj = {}
                if (document.getElementById('contactName')) {
                    dataObj['name'] = document.getElementById('contactName').value;
                }
                if (document.getElementById('contactEmail')) {
                    dataObj['email'] = document.getElementById('contactEmail').value;
                }
                if (document.getElementById('contactPhone')) {
                    dataObj['phone'] = document.getElementById('contactPhone').value;
                }
                if (document.getElementById('contactCompany')) {
                    dataObj['company'] = document.getElementById('contactCompany').value;
                }
                if (document.getElementById('contactStreet')) {
                    dataObj['street'] = document.getElementById('contactStreet').value;
                }
                if (document.getElementById('contactCity')) {
                    dataObj['city'] = document.getElementById('contactCity').value;
                }
                if (document.getElementById('contactState')) {
                    dataObj['state'] = document.getElementById('contactState').value;
                }
                if (document.getElementById('contactSubject')) {
                    dataObj['subject'] = document.getElementById('contactSubject').value;
                }
                if (document.getElementById('contactMessage')) {
                    dataObj['message'] = document.getElementById('contactMessage').value;
                }

                $.ajax({
                    url: 'https://heyleia.com/php/clientContact.php',
                    data: dataObj,
                    type: 'POST',
                    success: function(data) {
                        document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
                        if (data === 'success') {
                            swal("Success", "You have successfully submitted your message! We will contact you at our earliest convenience.", "success");
                            document.body.className = '';
                        } else {
                            swal("Uh Oh!", data, "error");
                            document.body.className = '';
                        }
                    },
                    error: function(err) {
                        console.log(err);
                        document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
                        swal("Uh Oh!", "There was a problem. Please try again later.", "error");
                        document.body.className = '';
                    }
                });
            }
        });
    }
    
    var submitNewsletter = function() {
        var spinner = document.createElement('div');
        var outer = document.createElement('div');

        outer.id = 'spinnerLoading';
        spinner.className = 'spinnerLoading';
        outer.style.background = 'rgba(0,0,0,0.7)';
        outer.style.borderRadius = '20px';
        outer.style.position = 'fixed';
        outer.style.left = ((window.innerWidth - 205) / 2).toString() + 'px';
        outer.style.width = '205px';
        outer.style.top = '30%';
        outer.style.height = '205px';
        outer.style.zIndex = '10000';
        spinner.style.marginLeft = '42.5px';
        spinner.style.marginTop = '42.5px';
        outer.appendChild(spinner);
        document.body.appendChild(outer);

        if (!addedSpinner) {
            addedSpinner = true;
            addSpinnerStyle();
        }

        var dataObj = {
            email: document.getElementById('newsletterInput').value
        }
        
        $.ajax({
            url: 'https://heyleia.com/php/clientNewsletter.php',
            data: dataObj,
            type: 'POST',
            success: function(data) {
                document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
                if (data === 'success') {
                    swal("Success", "You have successfully subscribed to our mailing list!", "success").then(function() {
                        document.getElementById('newsletterOuter').style.display = 'none';
                    });
                    
                    document.body.className = '';
                } else {
                    swal("Uh Oh!", data, "error");
                    document.body.className = '';
                }
            },
            error: function(err) {
                console.log(err);
                document.getElementById('spinnerLoading').parentElement.removeChild(document.getElementById('spinnerLoading'));
                swal("Uh Oh!", "There was a problem. Please try again later.", "error");
                document.body.className = '';
            }
        });
    }
    
    var addSpinnerStyle = function() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(".spinnerLoading {border: 16px solid #f3f3f3; /* Light grey */border-top: 16px solid #3498db; /* Blue */border-radius: 50%;width: 120px;height: 120px;animation: spin 2s linear infinite;}@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}"));
        document.body.appendChild(style);
    };
</script>
