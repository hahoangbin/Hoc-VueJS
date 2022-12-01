// Bai-02


// const app = Vue.createApp({
//     template:  `
//     <h2>Hello from {{ teamName }} and {{ !isHello ? firsName + " " + lastName : "" }}</h2>

//         <button @click="onChangeName">Change Name but shorter</button>

//         <div class="modal" v-if="isShowModal">Modal content</div>
//         `,
//     data() {
//         return{
//             teamName: "RHP Team",
//             firsName: 'Hà',
//             lastName: 'Bin',
//             isHello: false,
//             isShowModal: false,
//         }
//     },
//     methods: {
//         onChangeName() {
//             this.firsName = "Sky"
//             this.lastName = "Albert"
//             this.isShowModal = true
//         }
//     }
// });

// app.mount("#contact")

//  Bai-03

const app = Vue.createApp({
    data() {
        return {
            urlTesting: "gg.com",
            classTesting: "box",
            products: [
                {
                    name: 'Sản phẩm A',
                    price: '120$',
                    thumb: './assets/1.jpg',
                    isCart: false,
                },
                {
                    name: 'Sản phẩm B',
                    price: '150$',
                    thumb: './assets/2.jpg',
                    isCart: true,
                },
                {
                    name: 'Sản phẩm C',
                    price: '449$',
                    thumb: './assets/3.jpg',
                    isCart: false,
                },
                {
                    name: 'Sản phẩm VIP',
                    price: '999$',
                    thumb: './assets/4.jpg',
                    isCart: true,
                }
            ]
        }
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart
        }
    },
    computed: {
        productsComputed() {
            return this.products.filter((product) => product.price < '500$')
        }
    }
    
})

app.mount("#contact")