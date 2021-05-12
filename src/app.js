var app = new Vue ({

    el: "#root",
    data: {
        headerLinks: ["home", "about us", "facilities", "membership", "testimonials", "blog"],
        activeHeaderLink: 0
    },
    methods: {
        changeActivePage(index) {
            this.activeHeaderLink = index;
        }
    }
});