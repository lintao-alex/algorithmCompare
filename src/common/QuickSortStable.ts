/**
 * Created by lintao_alex on 2021/3/5
 */
import {QuickSort} from "./QuickSort";

export class QuickSortStable extends QuickSort {
    protected dealUnit(list: number[], lowIdx: number, heightIdx: number) {
        this.MarkOption(4)
        let pivot = list[heightIdx]
        let checkIdx = lowIdx
        let partitionIdx = heightIdx

        while (checkIdx < partitionIdx) {
            if(this.needChange(list[checkIdx], pivot)) {
                this.MarkOption(2)
                while(--partitionIdx > checkIdx) {
                    if(!this.needChange(list[partitionIdx], pivot)) {
                        this.swap(list, checkIdx, partitionIdx)
                        break
                    }
                }
            }
            this.MarkOption()
            ++checkIdx
        }
        this.swap(list, partitionIdx, heightIdx)

        this.MarkOption(2)
        if(partitionIdx+1<heightIdx) this.dealUnit(list, partitionIdx+1, heightIdx)
        this.MarkOption(2)
        if(partitionIdx-1>lowIdx) this.dealUnit(list, lowIdx, partitionIdx-1)
    }
}
