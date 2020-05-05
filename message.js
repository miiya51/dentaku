var example1 = new Vue({
    el: '.content',
    data: {
        counter: 0,
        counter1: 0,
        calc_flg: false,
        operator: ''
    },
    methods: {
        addnum: function (num) {
            if (this.calc_flg === false) {
                var num_str = String(num)
                if (num_str === '0' && counter === 0) {
                    this.counter = 0
                } else if (parseInt(this.counter) > 0) {
                    this.counter += num_str
                } else {
                    this.counter = parseInt(num_str)
                }
            } else {
                var num_str1 = String(num)
                if (num_str1 === '0' && counter1 === 0) {
                    this.counter1 = 0
                } else if (parseInt(this.counter1) > 0) {
                    this.counter1 += num_str1
                } else {
                    this.counter1 = parseInt(num_str1)
                }
            }
        },
        clearnum: function () {
            this.counter = 0
            this.counter1 = 0
            this.operator = ''
            this.calc_flg = false
        },
        plus: function () {
            this.operator = '+'
            this.calc_flg = true
        },
        minus: function () {
            this.operator = '-'
            this.calc_flg = true
        },
        multiply: function () {
            this.operator = '*'
            this.calc_flg = true
        },
        divide: function () {
            this.operator = '/'
            this.calc_flg = true
        },
        result: function () {
            this.calc_flg = false
            tmp_num = 0
            switch (this.operator) {
                case '+':
                    tmp_num = this.counter + this.counter1
                    this.counter = tmp_num
                    this.operator = '1111'
                    break;
                case '-':
                    tmp_num = this.counter - this.counter1
                    this.counter = tmp_num
                    break;
                case '*':
                    tmp_num = this.counter * this.counter1
                    this.counter = tmp_num
                    break;
                case '/':
                    tmp_num = this.counter / this.counter1
                    this.counter = tmp_num
                    break;
            }
            this.operator = ''
            this.counter1 = 0
        }

    }
})