var example1 = new Vue({
    el: '.content',
    data: {
        counter: 0
    },
    methods: {
        addnum: function (num) {
            this.counter = num
        }
    }
})