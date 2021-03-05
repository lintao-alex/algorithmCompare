/**
 * Created by lintao_alex on 2021/3/5
 */
import {QuickSort} from "./QuickSort";

export class QuickSortStable extends QuickSort {
    protected dealUnit(list: number[], lowIdx: number, heightIdx: number) {
        this.MarkOption(4)
        let pivot = list[heightIdx]
        let partitionIdx = lowIdx
        let rightIdx = heightIdx

        while (partitionIdx < rightIdx) {
            if(this.needChange(list[partitionIdx], pivot)) {
                this.MarkOption(2)
                while(--rightIdx > partitionIdx) {
                    if(!this.needChange(list[rightIdx], pivot)) {
                        this.swap(list, partitionIdx, rightIdx)
                        break
                    }
                }
                this.MarkOption()
                if(rightIdx==partitionIdx) break
            }
            this.MarkOption()
            ++partitionIdx
        }
        this.swap(list, partitionIdx, heightIdx)

        this.MarkOption(2)
        if(partitionIdx+1<heightIdx) this.dealUnit(list, partitionIdx+1, heightIdx)
        this.MarkOption(2)
        if(partitionIdx-1>lowIdx) this.dealUnit(list, lowIdx, partitionIdx-1)
    }
}
