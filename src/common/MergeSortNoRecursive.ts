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
                this.merge(list, start1, start2, Math.min(start2+delta-1,len-1))
                this.MarkOption(2)
                start1 = start2+delta
                start2 = start1+delta

                this.MarkOption()
            }

            this.MarkOption(2)
        }
    }

    protected merge(list: number[], prevLowIdx: number, nextLowIdx: number, nextHeightIdx: number) {
        this.mergeSortedNeighbourList(list, prevLowIdx, nextLowIdx, nextHeightIdx)
    }
}
