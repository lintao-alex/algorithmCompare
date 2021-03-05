/**
 * Created by lintao_alex on 2021/3/5
 */
import {SortCompare} from "./SortCompare";

export class QuickSort extends SortCompare{
    protected doSort(list: number[]): void {
        this.dealUnit(list, 0, list.length-1)
    }

    private dealUnit(list: number[], lowIdx: number, heightIdx: number) {
        this.MarkOption(2)
        let trgIdx = lowIdx


        this.MarkOption(3)
        let tail = list[heightIdx]
        for(let checkIdx=lowIdx; checkIdx<heightIdx; ++checkIdx) {
            this.MarkOption()
            let check = list[checkIdx]
            if(!this.needChange(check, tail)) {
                this.swap(list, checkIdx, trgIdx)
                this.MarkOption()
                ++trgIdx
            }

            this.MarkOption(2)
        }
        this.swap(list, trgIdx, heightIdx)

        this.MarkOption()
        if(trgIdx+1<heightIdx) {
            this.dealUnit(list, trgIdx+1, heightIdx)
        }
        this.MarkOption()
        if(trgIdx-1>lowIdx) {
            this.dealUnit(list, lowIdx, trgIdx-1)
        }
    }

    private swap(list: number[], idxA: number, idxB: number) {
        this.MarkOption(3);
        [list[idxA], list[idxB]] = [list[idxB], list[idxA]]
    }
}
