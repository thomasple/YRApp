$(document).ready(function () {

    $("#enterage")[0].reset();

///////////////////	
// INIT. 
///////////////////

    var whereiam = 1;
    $('.m1').css('right', -350);
    $('.m2').css('right', -350);
    $('.m3').css('left', -350);
    $('.m4').css('left', -350);
    $('.slide_int').css('top', -350);
    TweenMax.set($('.conseil_back'), {alpha: 0.8, z:0.1});
    TweenLite.set($('.conseil1'), {autoAlpha: 0, z:0.1});
    TweenMax.set($('.conseil2'), {autoAlpha: 0, z:0.1});
    TweenMax.set($('.backgroundbtn1'), {alpha: 1, z:0.1});
    TweenMax.set($('.backgroundbtn2'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn3'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn4'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn5'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn6'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn7'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn8'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn9'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.backgroundbtn10'), {alpha: 0.5, z:0.1});
    TweenMax.set($('.block_head'), {alpha: 0.9, z:0.1});
    $('.question1_btn1_back').css('opacity', 0);
    var pctpeau, pctsensible, pctrides, pctfermete, pcteclat, pctpores, pcttaches;
    var confort, rougeur, tache, eclat, grain, brillance, rides, fermete, ovale, boutons;
    var gel, cremenuit, complement, cremejour, gommage, serum, masque, demaquillant, contour;
    confort = rougeur = tache = eclat = grain = brillance = rides = fermete = ovale = boutons = false;
    gel = cremenuit = complement = cremejour = gommage = serum = masque = demaquillant = contour = false;


///////////////////	
// START INTRO 
///////////////////

    TweenMax.to($('.fakebackground'), 0.3, {
        autoAlpha: 0, onComplete: function () {
            int1.play();
        }
    });

    var int1 = new TimelineMax({paused: true});
    int1.to($('.m4'), 0.5, {left: 0, z:0.1, ease: Power1.easeOut});
    int1.to($('.m3'), 0.5, {left: 0, z:0.1, ease: Power1.easeOut}, "-=0.4");
    int1.to($('.m1'), 0.5, {right: 0, z:0.1, ease: Power1.easeOut}, "-=0.3");
    int1.to($('.m2'), 0.5, {right: 0, z:0.1, ease: Power1.easeOut}, "-=0.3");
    int1.to($('.slide_int'), 1, {top: 130, z:0.1, ease: Power1.easeOut}, "-=0.7");


    $('.slide_int').click(function () {
        int1.totalDuration(0.6).reverse();
        TweenMax.to($('.secondbackground'), 0.8, {alpha: 1, delay: 0.5, z:0.1});
        TweenMax.to($('.block_head'), 0.8, {alpha: 0.9, top: 0, ease: Power1.easeOut, delay: 0.5, z:0.1});
        TweenMax.to($('.question_1'), 1, {alpha: 1, top: 210, ease: Power1.easeInOut, delay: 0.5, z:0.1});
        animenavigation();
    });

    function animenavigation() {
        TweenMax.staggerTo($('.anim'), 0.6, {left: 120, ease: Back.easeOut, delay: 0.8, z:0.1}, 0.1);
    }

///////////////////	
// NAVIGATION 
///////////////////

    $('.question5btn_int').click(function () {
        TweenMax.to($('.conseil1'), 0.3, {autoAlpha: 1, z:0.1});
    });
    $('.question7btn_int').click(function () {
        TweenMax.to($('.conseil2'), 0.3, {autoAlpha: 1, z:0.1});
    });
    $('.conseil1').click(function () {
        TweenMax.to($('.conseil1'), 0.3, {autoAlpha: 0, z:0.1});
    });
    $('.conseil2').click(function () {
        TweenMax.to($('.conseil2'), 0.3, {autoAlpha: 0, z:0.1});
    });

    $('.question1btn11').click(function () {
        ausuivant(2);
    });
    $('.question2btnvalid1').click(function () {
        ausuivant(3);
    });
    $('.question3btnvalid1').click(function () {
        ausuivant(4);
    });
    $('.question4btnvalid1').click(function () {
        ausuivant(5);
    });
    $('.question5btnvalid1').click(function () {
        ausuivant(6);
    });
    $('.question6btnvalid1').click(function () {
        ausuivant(7);
    });
    $('.question7btnvalid1').click(function () {
        ausuivant(8);
    });
    $('.question8btnvalid1').click(function () {
        ausuivant(9);
    });
    $('.question9btnvalid1').click(function () {
        ausuivant(10);
    });
    $('.question5btn_int').click(function () {
        TweenMax.to($('.conseil1'), 0.8, {autoAlpha: 1, z:0.1});
    });

    $('.nav_btn1').addClass('clicked');
    $('.nav_btn1').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(1);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn2').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(2);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn3').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(3);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn4').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(4);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn5').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(5);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn6').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(6);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn7').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(7);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn8').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(8);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn9').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(9);
        } else {
            $(this).addClass('clicked');
        }
    });
    $('.nav_btn10').click(function () {
        if (!$(this).hasClass('clicked')) {
            navigue(10);
        } else {
            $(this).addClass('clicked');
        }
    });


    function navigue(i) {
        TweenMax.set($('.question_' + i), {left: 365, top: 850, z:0.1});
        TweenMax.to($('.backgroundbtn' + whereiam), 0.4, {alpha: 0.8, z:0.1});
        TweenMax.to($('.question_' + whereiam), 0.6, {left: 1500, top: 210, ease: Power1.easeInOut, z:0.1});
        TweenMax.to($('.backgroundbtn' + i), 0.4, {alpha: 1, z:0.1});
        $('.nav_btn' + whereiam).removeClass('clicked');
        $('.nav_btn' + i).addClass('clicked');
        TweenMax.to($('.question_' + i), 1, {alpha: 1, top: 210, ease: Power1.easeInOut, z:0.1});
        whereiam = i;
    }

    function ausuivant(i) {
        TweenMax.set($('.question_' + i), {left: 365, top: 850, z:0.1});
        TweenMax.to($('.backgroundbtn' + whereiam), 0.4, {alpha: 0.8, z:0.1});
        TweenMax.to($('.question_' + whereiam), 0.6, {left: 1500, top: 210, ease: Power1.easeOut, z:0.1});
        TweenMax.to($('.backgroundbtn' + i), 0.4, {alpha: 1, z:0.1});
        $('.nav_btn' + whereiam).removeClass('clicked');
        $('.nav_btn' + i).addClass('clicked');
        TweenMax.to($('.question_' + i), 1, {alpha: 1, top: 210, ease: Power1.easeInOut, z:0.1});
        whereiam = i;
    };


    function hidequestions() {
        $('.question_1').hide();
        $('.question_2').hide();
        $('.question_3').hide();
        $('.question_4').hide();
        $('.question_5').hide();
        $('.question_6').hide();
        $('.question_7').hide();
        $('.question_8').hide();
        $('.question_9').hide();
        $('.question_10').hide();
    };

///////////////////	
// POPIN CHOICES
///////////////////


    $('.question1btn1').click(function () {
        if (confort == false) {
            $('.question1btn1 .question1_btn1_back').css('opacity', 1);
            confort = true;
        }
        else if (confort == true) {
            $('.question1btn1 .question1_btn1_back').css('opacity', 0);
            ;
            confort = false;
        }
    });

    $('.question1btn2').click(function () {
        if (rougeur == false) {
            $('.question1btn2 .question1_btn1_back').css('opacity', 1);
            rougeur = true;
        }
        else if (rougeur == true) {
            $('.question1btn2 .question1_btn1_back').css('opacity', 0);
            rougeur = false;
        }
    });

    $('.question1btn3').click(function () {
        if (tache == false) {
            $('.question1btn3 .question1_btn1_back').css('opacity', 1);
            tache = true;
        }
        else if (tache == true) {
            $('.question1btn3 .question1_btn1_back').css('opacity', 0);
            tache = false;
        }
    });

    $('.question1btn4').click(function () {
        if (eclat == false) {
            $('.question1btn4 .question1_btn1_back').css('opacity', 1);
            eclat = true;
        }
        else if (eclat == true) {
            $('.question1btn4 .question1_btn1_back').css('opacity', 0);
            eclat = false;
        }
    });

    $('.question1btn5').click(function () {
        if (grain == false) {
            $('.question1btn5 .question1_btn1_back').css('opacity', 1);
            grain = true;
        }
        else if (grain == true) {
            $('.question1btn5 .question1_btn1_back').css('opacity', 0);
            grain = false;
        }
    });

    $('.question1btn6').click(function () {
        if (brillance == false) {
            $('.question1btn6 .question1_btn1_back').css('opacity', 1);
            brillance = true;
        }
        else if (brillance == true) {
            $('.question1btn6 .question1_btn1_back').css('opacity', 0);
            brillance = false;
        }
    });

    $('.question1btn7').click(function () {
        if (rides == false) {
            $('.question1btn7 .question1_btn1_back').css('opacity', 1);
            rides = true;
        }
        else if (rides == true) {
            $('.question1btn7 .question1_btn1_back').css('opacity', 0);
            rides = false;
        }
    });

    $('.question1btn8').click(function () {
        if (fermete == false) {
            $('.question1btn8 .question1_btn1_back').css('opacity', 1);
            fermete = true;
        }
        else if (fermete == true) {
            $('.question1btn8 .question1_btn1_back').css('opacity', 0);
            fermete = false;
        }
    });

    $('.question1btn9').click(function () {
        if (ovale == false) {
            $('.question1btn9 .question1_btn1_back').css('opacity', 1);
            ovale = true;
        }
        else if (ovale == true) {
            $('.question1btn9 .question1_btn1_back').css('opacity', 0);
            ovale = false;
        }
    });

    $('.question1btn10').click(function () {
        if (boutons == false) {
            $('.question1btn10 .question1_btn1_back').css('opacity', 1);
            boutons = true;
        }
        else if (boutons == true) {
            $('.question1btn10 .question1_btn1_back').css('opacity', 0);
            boutons = false;
        }
    });

    $('.question9btn1').click(function () {
        if (gel == false) {
            $('.question9btn1 .question1_btn1_back').css('opacity', 1);
            gel = true;
        }
        else if (gel == true) {
            $('.question9btn1 .question1_btn1_back').css('opacity', 0);
            gel = false;
        }
    });

    $('.question9btn2').click(function () {
        if (cremenuit == false) {
            $('.question9btn2 .question1_btn1_back').css('opacity', 1);
            cremenuit = true;
        }
        else if (cremenuit == true) {
            $('.question9btn2 .question1_btn1_back').css('opacity', 0);
            cremenuit = false;
        }
    });

    $('.question9btn3').click(function () {
        if (complement == false) {
            $('.question9btn3 .question1_btn1_back').css('opacity', 1);
            complement = true;
        }
        else if (complement == true) {
            $('.question9btn3 .question1_btn1_back').css('opacity', 0);
            complement = false;
        }
    });

    $('.question9btn4').click(function () {
        if (cremejour == false) {
            $('.question9btn4 .question1_btn1_back').css('opacity', 1);
            cremejour = true;
        }
        else if (cremejour == true) {
            $('.question9btn4 .question1_btn1_back').css('opacity', 0);
            cremejour = false;
        }
    });

    $('.question9btn5').click(function () {
        if (gommage == false) {
            $('.question9btn5 .question1_btn1_back').css('opacity', 1);
            gommage = true;
        }
        else if (gommage == true) {
            $('.question9btn5 .question1_btn1_back').css('opacity', 0);
            gommage = false;
        }
    });

    $('.question9btn6').click(function () {
        if (serum == false) {
            $('.question9btn6 .question1_btn1_back').css('opacity', 1);
            serum = true;
        }
        else if (serum == true) {
            $('.question9btn6 .question1_btn1_back').css('opacity', 0);
            serum = false;
        }
    });

    $('.question9btn7').click(function () {
        if (masque == false) {
            $('.question9btn7 .question1_btn1_back').css('opacity', 1);
            masque = true;
        }
        else if (masque == true) {
            $('.question9btn7 .question1_btn1_back').css('opacity', 0);
            masque = false;
        }
    });

    $('.question9btn8').click(function () {
        if (demaquillant == false) {
            $('.question9btn8 .question1_btn1_back').css('opacity', 1);
            demaquillant = true;
        }
        else if (demaquillant == true) {
            $('.question9btn8 .question1_btn1_back').css('opacity', 0);
            demaquillant = false;
        }
    });

    $('.question9btn9').click(function () {
        if (contour == false) {
            $('.question9btn9 .question1_btn1_back').css('opacity', 1);
            contour = true;
        }
        else if (contour == true) {
            $('.question9btn9 .question1_btn1_back').css('opacity', 0);
            contour = false;
        }
    });

///////////////////	
// CURSEURS 
///////////////////

    Draggable.create(".mybox1", {
        type: "x",
        bounds: '#container1',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pctpeau = (185 + this.x) / 371 * 100;
            console.log(pctpeau);
        }
    });
    Draggable.create(".mybox3", {
        type: "x",
        bounds: '#container3',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pctsensible = (185 + this.x) / 371 * 100
        }
    });
    Draggable.create(".mybox4", {
        type: "x",
        bounds: '#container4',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pctrides = (185 + this.x) / 371 * 100
        }
    });
    Draggable.create(".mybox5", {
        type: "x",
        bounds: '#container5',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pctfermete = (185 + this.x) / 371 * 100
        }
    });
    Draggable.create(".mybox6", {
        type: "x",
        bounds: '#container6',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pcteclat = (185 + this.x) / 371 * 100
        }
    });
    Draggable.create(".mybox7", {
        type: "x",
        bounds: '#container7',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pctpores = (185 + this.x) / 371 * 100
        }
    });
    Draggable.create(".mybox8", {
        type: "x",
        bounds: '#container8',
        edgeResistance: 1,
        lockAxis: true,
        throwProps: false,
        onDrag: function () {
            pcttaches = (185 + this.x) / 371 * 100
        }
    });


    $('.question_2 .bar_form').click(function (e) {
        var $div = $(".question_2 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox1"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pctpeau = (185 + relX - 220) / 371 * 100;
    });
    $('.question_3 .bar_form').click(function (e) {
        var $div = $(".question_3 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox3"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pctsensible = (185 + relX - 220) / 371 * 100;
    });
    $('.question_4 .bar_form').click(function (e) {
        var $div = $(".question_4 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox4"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pctrides = (185 + relX - 220) / 371 * 100;
    });
    $('.question_5 .bar_form').click(function (e) {
        var $div = $(".question_5 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox5"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pctfermete = (185 + relX - 220) / 371 * 100;
    });
    $('.question_6 .bar_form').click(function (e) {
        var $div = $(".question_6 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox6"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pcteclat = (185 + relX - 220) / 371 * 100;
    });
    $('.question_7 .bar_form').click(function (e) {
        var $div = $(".question_7 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox7"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pctpores = (185 + relX - 220) / 371 * 100;
    });
    $('.question_8 .bar_form').click(function (e) {
        var $div = $(".question_8 .bar_form");
        var relX = e.pageX - $div.offset().left;
        if (relX > 412) {
            relX = 413;
        }
        ;
        if (relX < 44) {
            relX = 42;
        }
        ;
        TweenMax.to($(".mybox8"), 1, {x: relX - 228, z: .001, ease: Expo.easeInOut});
        pcttaches = (185 + relX - 220) / 371 * 100;
    });


    var ageutilisateur = $('#sonage').val();
    TweenMax.set($(".mybox3"), {x: 43 - 228, z: .001});
    TweenMax.set($(".mybox4"), {x: 43 - 228, z: .001});
    TweenMax.set($(".mybox5"), {x: 43 - 228, z: .001});
    TweenMax.set($(".mybox6"), {x: 43 - 228, z: .001});
    TweenMax.set($(".mybox7"), {x: 43 - 228, z: .001});
    TweenMax.set($(".mybox8"), {x: 43 - 228, z: .001});

    pctpeau = 50;
    pctsensible = pctrides = pctfermete = pcteclat = pctpores = pcttaches = 0;


/////////CHECK AGE

    $('#sonage').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });


    var baba = $('.style-5 input:text').val();

    /*$('#sonage').on('focus', function() {
     $(this).val('');
     }).on('blur', function() {
     checkInp()
     })*/

    function checkInp() {
        var xx = $('#sonage').val();

        if (isNumeric(xx) == false || xx == '') {
            $('.style-5 input:text').css('color', 'red');
            $('#sonage').val(baba);
        } else {
            $('.style-5 input:text').css('color', 'green');
            lancequestionnaire();
        }
    };


    function isNumeric(val) {
        var numeric = true;
        var chars = "0123456789.-,+";
        var len = val.length;
        var char = "";
        for (i = 0; i < len; i++) {
            char = val.charAt(i);
            if (chars.indexOf(char) == -1) {
                numeric = false;
            }
        }
        return numeric;
    }


///////////////////	
// VALID QUESTIONS 
///////////////////

    $('.question10btnvalid1').click(function () {
        if ($('#sonage').val() !== '') {
            checkInp();
        }
    });
    
/////////////////////////////////////
/////////////////////////////////////
//////  COND. 
////// ALGO. 
/////////////////////////////////////
/////////////////////////////////////


    function lancequestionnaire() {
        ageutilisateur = $('#sonage').val();
        varforcond3 = 0;
        varforcond2 = 0;
        etape1_nonageouantiage();
    }

    var varforcond2 = 0;
    var varforcond3 = 0;


    function test_var2forcond3() {
        if (pctrides > 20) {
            varforcond3++;
        }
        if (pctfermete > 20) {
            varforcond3++;
        }
        if (pcteclat > 20) {
            varforcond3++;
        }
        if (pctpores > 40) {
            varforcond3++;
        }
        if (confort == true) {
            varforcond3++;
        }
        if (eclat == true) {
            varforcond3++;
        }
        if (rides == true) {
            varforcond3++;
        }
        if (fermete == true) {
            varforcond3++;
        }
        if (grain == true) {
            varforcond3++;
        }
        if (ovale == true) {
            varforcond3++;
        }
        if (brillance == true) {
            varforcond3++;
        }
    };


    function test_var2forcond2() {
        if (pctpores > 40) {
            varforcond2 = 2
        }
        ;
        if (brillance == true) {
            varforcond2++;
        }
        ;
        if (boutons == true) {
            varforcond2++;
        }
        ;
        if (grain == true) {
            varforcond2++;
        }
    };

    function etape1_nonageouantiage() {
        if (rides == true || fermete == true || ovale == true || pctrides > 25 || pctfermete > 25 || ageutilisateur > 35) {
            etape2_antiage();
        }
        else {
            etape2_nonage();
        }
        ;
    };

    function etape2_nonage() {
        test_var2forcond2();
        if (rougeur == true && pctsensible > 78) {
            $(location).attr('href', 'results/result12.html');
            /*$(location).attr('href', 'success.html');*/
        }
        else if (ageutilisateur < 20 && pctpeau < 67 && pctpeau > 20 && varforcond2 >= 2) {
            $(location).attr('href', 'results/result13.html');
           /* $(location).attr('href', 'success.html');*/
        }
        else {
            etape21_essentiel();
        }
        ;
    };

    function etape21_essentiel() {
        if (pctpeau < 20) {
            $(location).attr('href', 'results/result14.html');
            /*$(location).attr('href', 'success.html');*/
        }
        else if (pctpeau > 67) {
            etape31_nutri();
        }
        else {
            etape32_hydra();
        }
        ;
    };


    function etape31_nutri() {
        if (gel == true) {
            /*$(location).attr('href', 'success.html');*/
            $(location).attr('href', 'results/result15.html');
        }
        else {
            /*$(location).attr('href', 'success.html');*/
            $(location).attr('href', 'results/result16.html');
        }
    };
    function etape32_hydra() {
        if (gel == true) {
            etape33_hydra();
        }
        else {
            etape34_hydra();
        }
    };

    function etape33_hydra() {
        if (pctpeau > 35) {
            $(location).attr('href', 'results/result20.html');
            /*$(location).attr('href', 'success.html');*/
        }
        else if (pctpeau < 36) {
            $(location).attr('href', 'results/result19.html');
            /*$(location).attr('href', 'success.html');*/
        }
    };

    function etape34_hydra() {
        if (pctpeau > 36) {
            $(location).attr('href', 'results/result18.html');
            /*$(location).attr('href', 'success.html');*/
        }
        else if (pctpeau < 36) {
            $(location).attr('href', 'results/result17.html');
           /* $(location).attr('href', 'success.html');*/
        }
    };


    function etape2_antiage() {
        test_var2forcond3();
        if (ageutilisateur > 71) {
            etape21_antiage_richecreme();
        }
        else if (ageutilisateur < 65 && ageutilisateur > 25 && varforcond3 < 6) {
            etape22_antiage_svegetal();
        }
        else if (ageutilisateur < 65 && ageutilisateur > 25 && varforcond3 > 5) {
            etape23_antiage_multiaction();
        }
        else if ((ageutilisateur < 22 && rides == true) || (ageutilisateur < 22 && pctrides > 23)) {
            $(location).attr('href', linkoo[2]);
           /* $(location).attr('href', 'success.html');*/
        }
        else if (ageutilisateur < 22) {
            etape2_nonage();
        }
        else {
            etape23_antiage_multiaction();
        }
    };


    function etape21_antiage_richecreme() {
        if (pctpeau > 68) {
            $(location).attr('href', 'results/result9.html');
            /* $(location).attr('href', 'success.html');*/
        }
        else if (pctpeau < 20) {
            $(location).attr('href', 'results/result10.html');
           /* $(location).attr('href', 'success.html');*/
        }
        else {
            $(location).attr('href', 'results/result11.html');
            /*$(location).attr('href', 'success.html');*/
        }
    };


    function etape22_antiage_svegetal() {
        if (ovale == true || pctfermete > 75) {
            $(location).attr('href', 'results/result2.html');
           /* $(location).attr('href', 'success.html');*/
        }
        else if ((eclat == true) || ( pctrides < 10)) {
            $(location).attr('href', 'results/result3.html');
            /*$(location).attr('href', 'success.html');*/
        }
        else {
            $(location).attr('href', 'results/result1.html');
           /* $(location).attr('href', 'success.html');*/
        }
    };


    function etape23_antiage_multiaction() {
        if (ageutilisateur > 53) {
            etape31_antiage_aag();
        }
        else if (ageutilisateur < 33) {
            etape32_antiage_elixir();
        }
        else if (ageutilisateur < 45 && (fermete == true || rides == true || ovale == true || pctrides > 20 || pctfermete > 20)) {
            etape31_antiage_aag();
        }
        else {
            etape32_antiage_elixir();
        }
    };


    function etape31_antiage_aag() {
        if (pctpeau < 68) {
            $(location).attr('href', 'results/result5.html');
          /*  $(location).attr('href', 'success.html');*/
        }
        else {
            $(location).attr('href', 'results/result4.html');
           /* $(location).attr('href', 'success.html');*/
        }
    };


    function etape32_antiage_elixir() {
        if (rougeur == true && pctsensible > 40) {
            $(location).attr('href', 'results/result6.html');
          /*  $(location).attr('href', 'success.html');*/
        }
        else if (pctpeau > 68) {
            $(location).attr('href', 'results/result8.html');
          /*  $(location).attr('href', 'success.html');*/
        }
        else if (pctpeau < 69) {
            $(location).attr('href', 'results/result7.html');
            /*$(location).attr('href', 'success.html');*/
        }
    };

/////////////////////////////////////
/////////////////////////////////////
//////  DEBUG.
////// 
/////////////////////////////////////
/////////////////////////////////////


// console.log(
// "varforcond3:"+varforcond3,
// "varforcond2:"+varforcond2,
// "confort:"+confort,
// "rougeur:"+rougeur,
// "tache:"+tache,
// "eclat:"+eclat,
// "grain:"+grain,
// "brillance:"+brillance,
// "rides:"+rides,
// "fermete:"+fermete,
// "ovale:"+ovale,
// "boutons:"+boutons,
// "pctpeau:"+pctpeau,
// "pctsensible:"+pctsensible,
// "pctrides:"+pctrides,
// "pctfermete:"+pctfermete,
// "pcteclat:"+pcteclat,
// "pctpores:"+pctpores,
// "pcttaches:"+pcttaches,
// "gel:"+gel,
// "cremenuit:"+cremenuit,
// "complement:"+complement,
// "cremejour:"+cremejour,
// "gommage:"+gommage,
// "serum:"+serum,
// "masque:"+masque,
// "demaquillant:"+demaquillant,
// "contour:"+contour,
// "ageutilisateur :"+ageutilisateur 
// );

});
