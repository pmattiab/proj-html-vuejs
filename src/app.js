var app = new Vue ({

    // elemento vue js in html
    el: "#root",

    // data
    data: {

        // link per la nav bar nell'header
        headerLinks: ["home", "about us", "facilities", "membership", "testimonials", "blog"],

        // link attivo nella nav bar nell'header
        activeHeaderLink: 0,

        // menu nel footer superiore
        footerMenu: [
            {
                listTitle: "Come find us",
                listElement: [
                    {
                        text: "12345 North Main Street",
                        class: "contacts"
                    },
                    {
                        text: "New York, NY 555555",
                        class: "contacts"
                    },
                    {
                        text: "Phone: 1.800.555.6789",
                        class: "contacts"
                    },
                    {
                        text: "Email: info@your-domain.com",
                        class: "contacts"
                    }
                ]
            },
            {
                listTitle: "Recent Posts",
                listElement: [
                    {
                        text: "Train with free weights or your body weight?",
                        class: "post"
                    },
                    {
                        text: "Nutritional advice that will keep you training",
                        class: "post"
                    }
                ]
            },
            {
                listTitle: "Opening Times",
                listElement: [
                    {
                        text: "Weekdays Monday - Friday",
                        class: "days"
                    },
                    {
                        text: "09:00 - 19:00",
                        class: "schedule"
                    },
                    {
                        text: "Weekends Saturday - Sunday",
                        class: "days"
                    },
                    {
                        text: " 09:00 - 21:00",
                        class: "schedule"
                    }
                ]
            }
        ],

        // menu copyright nel footer inferiore
        footerCopyright: ["© Copyright 2012 - 2020", "Avada Theme by Theme Fusion", "All Rights Reserved", "Powered by WordPress"],

        // bottoni social nel footer inferiore
        footerSocial: [
            {
                social: "facebook",
                class: "fa-facebook-f",
                url: "https://www.facebook.com"
            },
            {
                social: "twitter",
                class: "fa-twitter",
                url: "https://www.twitter.com"
            },
            {
                social: "instagram",
                class: "fa-instagram",
                url: "https://www.instagram.com"
            }
        ]
    },

    // methods (funzioni)
    methods: {
        changeActivePage(index) {
            this.activeHeaderLink = index;
        }
    }
});