export class Event {
    constructor(
        public id: number,
        public tumbnail: string,
        public title: string,
        public content: string,
        public salesStart: string,
        public salesEnd: string,
        public eventDate: string,
        public ticket: Ticket
    ) { }
}

export class Ticket {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number
    ) { }
}