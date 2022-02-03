import { Status } from './game-status';
export class Gamelogic {
    gameField: Array<number> = [];

    currentTurn:number=0;

    gameStatus: Status;


    public constructor() {
        this.gameStatus = Status.STOP;
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    gameStart(): void {
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.currentTurn = this.randomPlayerstart();
        this.gameStatus = Status.START;
    }
    randomPlayerstart(): number {
        const startPlyer = Math.floor(Math.random()*2)+1;
        return startPlyer;
    }
}
