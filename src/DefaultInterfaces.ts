export interface iProduct{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    cartID?: number;
    counter: number;
}