/**
 * Created by lintao_alex on 2021/3/2
 */
import {MergeSort} from "./MergeSort";

export class MergeSortLocal extends MergeSort {
    protected merge(list: number[], lowIdx: number, middleIdx: number, heightIdx: number) {
        let start1 = lowIdx
        let end1 = middleIdx-1
        this.MarkOption(2)
        for(let checkIdx=middleIdx; checkIdx<=heightIdx; ++checkIdx) {
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
