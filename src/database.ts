// import { Customer, Product } from './types'

// const customer: Customer[] = [
//     {id:"1", name: "mingss", email:"eeee@eeee", address: "서울", description: "222222"},
//     {id:"2", name: "mingss", email:"eeee@eeee", address: "서울", description: "222222"},
//     {id:"3", name: "mingss", email:"eeee@eeee", address: "서울", description: "222222"},
// ]

// const products: Product[] = [
//     {id: 1, name: "product1", description: "product1_설명", price: 10000},
//     {id: 2, name: "product2", description: "product2_설명", price: 20000},
//     {id: 3, name: "product3", description: "product3_설명", price: 30000},
// ]

// const databaseA = {
//     customer,
//     products
// }

// export default databaseA;

//mongoDB
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
console.log("database.ts 호출");
const connectDB  = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || '');
        console.log('MongoDB 연결 됨');
    } catch(error) {
        console.error('MongoDB 연결 안됨', error);
    } 
}
export default connectDB;