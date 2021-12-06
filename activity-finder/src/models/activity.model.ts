export class Activity {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: number;

    constructor() {
        this.activity = "";
        this.type = "";
        this.participants = 0;
        this.price = 0;
        this.link = "";
        this.key = 0;
    }
}