/**
 * Created by lintao_alex on 2021/3/2
 */
import {MergeSortNoRecursive} from "./MergeSortNoRecursive";

export class MergeSortNoRecursiveLocal extends MergeSortNoRecursive {

    protected merge(list: number[], start1: number, end1: number, start2: number, end2: number) {
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
