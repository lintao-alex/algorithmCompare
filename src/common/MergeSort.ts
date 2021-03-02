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

    private merge(list: number[], lowIdx: number, middleIdx: number, heightIdx: number) {
        this.MarkOption(3)
        let tempList: number[] = []
        let leftIdx = lowIdx
        let rightIdx = middleIdx

        this.MarkOption(2)
        while (leftIdx<middleIdx && rightIdx<=heightIdx) {
            if (this.needChange(list[leftIdx], list[rightIdx])) {
                this.MarkOption(2)
                tempList.push(list[rightIdx])
                ++rightIdx
            } else {
                this.MarkOption(2)
                tempList.push(list[leftIdx])
                ++leftIdx
            }
        }

        this.MarkOption()
        if(leftIdx<middleIdx) {
            this.moveSlice(list, leftIdx, middleIdx-1, heightIdx-middleIdx+1)
        }

        this.MarkOption(2)
        for(let i=0,len=tempList.length; i<len; ++i) {
            this.MarkOption()
            list[lowIdx+i] = tempList[i]
            this.MarkOption(2)
        }
    }
}
