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
    const moreProjects = document.getElementById('more-projects');
    const loadMoreBtn = document.getElementById('load-more-btn-container');

    if (moreProjects) {
        moreProjects.classList.remove('hidden');
        // Re-enable Scrollify update to recalculate heights
        if ($.scrollify) {
            setTimeout(function () {
                $.scrollify.update();
            }, 100);
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

