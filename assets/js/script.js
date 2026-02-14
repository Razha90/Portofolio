$(function () {
    // Mobile menu toggle
    $('#mobile-menu-button').on('click', function () {
        $('#mobile-menu').toggleClass('max-h-0 opacity-0 max-h-64 opacity-100');
    });

    // Close mobile menu when a link is clicked
    $('#mobile-menu a').on('click', function () {
        $('#mobile-menu').addClass('max-h-0 opacity-0').removeClass('max-h-64 opacity-100');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function (event) {
        const mobileMenu = $('#mobile-menu');
        const mobileMenuButton = $('#mobile-menu-button');

        if (!mobileMenu.is(event.target) && mobileMenu.has(event.target).length === 0 &&
            !mobileMenuButton.is(event.target) && mobileMenuButton.has(event.target).length === 0) {
            mobileMenu.addClass('max-h-0 opacity-0').removeClass('max-h-64 opacity-100');
        }
    });

    // Theme toggle
    $('#theme-toggle').on('click', function () {
        $('html').toggleClass('dark');
        const isDark = $('html').hasClass('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    $.scrollify({
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "footer, .interstitial",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".section").each(function (i) {
                activeClass = "";
                if (i === $.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $("body").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});

function toggleProjects() {
    const moreProjects = $('#more-projects');
    const loadMoreBtn = $('#load-more-btn-container');

    if (moreProjects.length) {
        moreProjects.removeClass('hidden');

        // Use Scrollify's update method as per documentation
        if ($.scrollify) {
            $.scrollify.update();

            // Sometimes a small delay helps recalculate if there are images loading
            setTimeout(function () {
                $.scrollify.update();
            }, 200);
        }
    }

    if (loadMoreBtn.length) {
        loadMoreBtn.hide();
    }
}

