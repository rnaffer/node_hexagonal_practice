import { v4 as uuidv4 } from 'uuid';

export class Uuid {
    private value: string;

    constructor(uuid: string) {
        this.value = uuid ?? uuidv4();
    }

    getValue(): string {
        return this.value;
    }
}