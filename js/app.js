$(document).ready(function () {

    $('.page-scroll').on('click', function (e) {

        //offset().top = jarak dari atas ke element yang bersangkutan
        var tujuan = $(this).attr('href');
        // tangkap elemnt ybs
        var elementTujuan = $(tujuan);

        $('html , body').animate({

            scrollTop: elementTujuan.offset().top

        }, 1000, 'easeInOutExpo');




        e.preventDefault(); // agar link yang kita klik tidak refres

    });

    $(window).on('load', function () {

        $('.preloader').addClass('complete');
    });

    $('#image1').click(function () {

        $('.img1').attr('src', 'img/ourspace/even.jpg');
    });

    $('#image2').click(function () {

        $('.img1').attr('src', 'img/ourspace/lounge.jpg');
    });

    $('#image3').click(function () {

        $('.img1').attr('src', 'img/ourspace/meeting.jpg');
    });


    $('.select-member').change(function () {

        //    console.log($('.select-member').val());
        var val = $('.select-member').val();
        if (val == "") {
            $('#price').val("");
        } else if (val == "presiden_membership") {
            $('#price').val("950.000");
        } else if (val == "flex_10_days") {
            $('#price').val("450.000");
        } else {
            $('#price').val("300.000");
        }


    });
    var prevScrollpos = window.pageYOffset;

    $(window).scroll(function () {

        var wscroll = $(this).scrollTop();
        // }

        if (wscroll > $('.service').offset().top - 100) { // mengatur kondisi dimana jarak scroll dengan elment yang dituju
            $('.service .thumbnail').each(function (i) { // looping tag html yang mempunyai class thumbnail dengan menyertakan param i untuk digunakan pada saat event di jalankan

                setTimeout(function () { // mengatur waktu muncul nya event paralax
                    $('.service .thumbnail').eq(i).addClass('muncul'); // untuk menambahkan class di dalam tag html
                }, 300 * i + 1)

            });

        }
        if (wscroll > $('.member').offset().top - 100) { // mengatur kondisi dimana jarak scroll dengan elment yang dituju
            $('.box-darkyellow').each(function (i) { // looping tag html yang mempunyai class thumbnail dengan menyertakan param i untuk digunakan pada saat event di jalankan

                setTimeout(function () { // mengatur waktu muncul nya event paralax
                    $('.box-darkyellow').eq(i).addClass('muncul'); // untuk menambahkan class di dalam tag html
                }, 300 * i + 1)

            });

        }

        if (wscroll > $('.testi2').offset().top - 100) { // mengatur kondisi dimana jarak scroll dengan elment yang dituju
            $('.box-testi .thumb').each(function (i) { // looping tag html yang mempunyai class thumbnail dengan menyertakan param i untuk digunakan pada saat event di jalankan

                setTimeout(function () { // mengatur waktu muncul nya event paralax
                    $('.box-testi .thumb').eq(i).addClass('muncul'); // untuk menambahkan class di dalam tag html
                }, 300 * i + 1)

            });

        }

        if (wscroll > $('#about').offset().top - 50) {
            $('.chevron').fadeIn(1000);
            $('.nav-fix').css('top', '0px');
            $('.nav-fix').css('z-index', '2');
            $('.nav-fix').addClass('bg-dark');
            $('.about p').addClass('muncul');
        } else {
            $('.chevron').fadeOut(50);
            $('.nav-fix').css('top', '-100px');
            $('.nav-fix').css('z-index', '0');
        }
    });



});