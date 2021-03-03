/**
 * Created by lintao_alex on 2021/3/2
 */
import {MergeSortNoRecursive} from "./MergeSortNoRecursive";

export class MergeSortNoRecursiveLocal extends MergeSortNoRecursive {

    protected merge(list: number[], prevLowIdx: number, nextLowIdx: number, nextHeightIdx: number) {
        this.MarkOption()
        let prevHeightIdx = nextLowIdx-1

        this.MarkOption(2)
        for(let checkIdx=nextLowIdx; checkIdx<=nextHeightIdx; ++checkIdx) {
            this.MarkOption()
            let check=list[checkIdx]

            let insertIdx = this.binarySearchInsertIdx(list, prevLowIdx, prevHeightIdx, check)
            this.MarkOption()
            if(insertIdx==checkIdx) break
            this.moveSlice(list, insertIdx, checkIdx-1)

            this.MarkOption(3)
            list[insertIdx] = check
            prevLowIdx = insertIdx+1
            prevHeightIdx = checkIdx

            this.MarkOption(2)
        }
    }
}
