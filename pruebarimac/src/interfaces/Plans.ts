export interface Plan {

    name: string;
    price: number;
    age: number;
    description: string[];

}


interface Plans {
    list: Plan[];
}
export default Plans;