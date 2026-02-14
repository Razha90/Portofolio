$(function () {
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

