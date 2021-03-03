/**
 * Created by lintao_alex on 2021/3/2
 */
import {SortCompare} from "./SortCompare";

export class MergeSort extends SortCompare {
    protected doSort(list: number[]): void {
        this.recursive(list, 0, list.length-1)
    }

    private recursive(list: number[], lowIdx: number, heightIdx: number) {
        this.MarkOption()
        let middleIdx = Math.ceil((lowIdx+heightIdx)*0.5)

        this.MarkOption()
        if(middleIdx<heightIdx) {
            this.recursive(list, lowIdx, middleIdx - 1)
            this.recursive(list, middleIdx, heightIdx)
        }
        this.merge(list, lowIdx, middleIdx, heightIdx)
    }

    protected merge(list: number[], lowIdx: number, middleIdx: number, heightIdx: number) {
        this.mergeSortedNeighbourList(list, lowIdx, middleIdx, heightIdx)
    }
}
