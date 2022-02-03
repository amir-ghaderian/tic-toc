import { Status } from './game-status';
export class Gamelogic {
    gameField: Array<number> = [];

    currentTurn: number = 0;

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
        const startPlyer = Math.floor(Math.random() * 2) + 1;
        return startPlyer;
    }
    setField(position: number, value: number): void {
        this.gameField[position] = value;
    }
    getPlayerColorClass(): string {
        const colorClass = (this.currentTurn === 2) ? 'player-two' : 'player-one';
        return colorClass;
    }
    changePlayer(): void {
        this.currentTurn = (this.currentTurn === 2) ? 1 : 2;
    }
}
