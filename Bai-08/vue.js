var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Aó thun nam thể thao hàng VNXK vải dày mịn!',
        url: 'https://imgs.search.brave.com/gbRmI6hiP91nrUPTwoQou1P0oL1DzAkdSqCqSYziCyg/rs:fit:800:1067:1/g:ce/aHR0cHM6Ly93d3cu/YWttZW4udm4vaW1h/Z2VzL3RodW1icy8y/MDE4LzExL2FvLXRo/dW4tdHJhbmctYXQ3/ODUtMTAxNTYtc2xp/ZGUtcHJvZHVjdHMt/NWJkYWMxOTA4YTBj/ZC5qcGc',
        target: '_top',
        price: 120000
    },
    methods: {
        say: function(text) {
            return 'HELLO' + text;
        }
    }
})
