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

    private merge(list: number[], start1: number, end1: number, start2: number, end2: number) {
        this.MarkOption(2)
        for(let checkIdx=start2; checkIdx<=end2; ++checkIdx) {
            this.MarkOption()
            let check=list[checkIdx]

            let insertIdx = this.binarySearchInsertIdx(list, start1, end1, check)
            this.MarkOption()
            if(insertIdx==checkIdx) break
            this.moveSlice(list, insertIdx, checkIdx-1)

            this.MarkOption(3)
            list[insertIdx] = check
            start1 = insertIdx+1
            end1 = checkIdx

            this.MarkOption(2)
        }
    }
}
