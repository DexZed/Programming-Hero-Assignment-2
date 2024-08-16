$(window).on('load', function() {
    $('.slideshow').each(function() {
        var $slideshow = $(this); // Store a reference to the current slideshow

        // Hide all slides except the first one within this slideshow
        $slideshow.children('div:gt(0)').hide();

        // Set an interval for the slideshow animation
        setInterval(function() {
            $slideshow.children('div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo($slideshow);
        }, 3000);
    });
});
