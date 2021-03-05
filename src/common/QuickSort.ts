/**
 * Created by lintao_alex on 2021/3/5
 */
import {SortCompare} from "./SortCompare";

export class QuickSort extends SortCompare{
    protected doSort(list: number[]): void {
        this.dealUnit(list, 0, list.length-1)
    }

    protected dealUnit(list: number[], lowIdx: number, heightIdx: number) {
        this.MarkOption(2)
        let partitionIdx = lowIdx


        this.MarkOption(3)
        let pivot = list[heightIdx]
        for(let checkIdx=lowIdx; checkIdx<heightIdx; ++checkIdx) {
            this.MarkOption()
            let check = list[checkIdx]
            if(!this.needChange(check, pivot)) {
                this.swap(list, checkIdx, partitionIdx)
                this.MarkOption()
                ++partitionIdx
            }

            this.MarkOption(2)
        }
        this.swap(list, partitionIdx, heightIdx)

        this.MarkOption(2)
        if(partitionIdx+1<heightIdx) this.dealUnit(list, partitionIdx+1, heightIdx)
        this.MarkOption(2)
        if(partitionIdx-1>lowIdx) this.dealUnit(list, lowIdx, partitionIdx-1)
    }

}
