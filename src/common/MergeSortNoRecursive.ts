/**
 * Created by lintao_alex on 2021/3/2
 */
import {SortCompare} from "./SortCompare";

export class MergeSortNoRecursive extends SortCompare{
    protected doSort(list: number[]): void {
        this.MarkOption(2)
        for(let delta=1,len=list.length; delta<len; delta+=delta) {
            this.MarkOption(2)
            let start1 = 0
            let start2 = start1+delta

            this.MarkOption()
            while (start2<len) {
                this.merge(list, start1, start2-1, start2, Math.min(start2+delta-1,len-1))
                this.MarkOption(2)
                start1 = start2+delta
                start2 = start1+delta

                this.MarkOption()
            }

            this.MarkOption(2)
        }
    }

    protected merge(list: number[], start1: number, end1: number, start2: number, end2: number) {
        let lowIdx = start1
        let middleIdx = start2
        let heightIdx = end2
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
