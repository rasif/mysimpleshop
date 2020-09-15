export default class CartService {
    static getCartItems() {
        const items = JSON.parse(localStorage.getItem('cart'));

        return items || [];
    }
}