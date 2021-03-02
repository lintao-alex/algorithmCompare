/**
 * Created by lintao_alex on 2021/3/2
 */
import {InsertionSort} from "./InsertionSort";

export class InsertionSort2 extends InsertionSort {
    protected searchAndMove(list: number[], checkIdx: number) {
        this.MarkOption()
        let check = list[checkIdx]
        let insertIdx = this.binarySearchInsertIdx(list, 0, checkIdx-1, check)

        this.MarkOption()
        if(insertIdx<checkIdx) {
            this.moveSlice(list, insertIdx, checkIdx)
            this.MarkOption()
            list[insertIdx] = check
        }
    }
}
