/**
 * Created by lintao_alex on 2021/3/2
 */
import {BaseCompare} from "./BaseCompare";

export abstract class SortCompare extends BaseCompare {
    sort(list: number[]) {
        this.doSort(list)
    }

    isOk(list: number[]) {
        return !list.some((v,i,l)=>i>0&&this.needChange(l[i-1],v),this)
    }

    protected needChange(prev: number, next: number) {
        this.MarkOption()
        return prev>next
    }

    protected abstract doSort(list: number[]): void

    //utils
    protected binarySearchInsertIdx(list: number[], lowIdx: number, heightIdx: number, check: number) {
        this.MarkOption()
        while (lowIdx<=heightIdx) {
            this.MarkOption()
            let midIdx = Math.floor((lowIdx+heightIdx)*0.5)

            if(this.needChange(list[midIdx], check)) {
                this.MarkOption()
                heightIdx=midIdx-1
            } else {
                this.MarkOption()
                lowIdx=midIdx+1

                this.MarkOption()
                if(list[midIdx]==check) break
            }
            this.MarkOption()
        }
        return lowIdx
    }

    protected moveSlice(list: number[], sourceLowIdx: number, sourceHeightIdx: number, delta=1) {
        this.MarkOption(2)
        for(let i=sourceHeightIdx; i>=sourceLowIdx; --i) {
            this.MarkOption()
            list[i+delta] = list[i]

            this.MarkOption(2)
        }
    }
}

