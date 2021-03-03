/**
 * Created by lintao_alex on 2021/3/2
 */
import {SortCompare} from "./SortCompare";

export class InsertionSort extends SortCompare{
    protected doSort(list: number[]): void {
        this.MarkOption(2)
        for(let checkIdx=1,len=list.length; checkIdx<len; ++checkIdx) {
            this.searchAndMove(list, checkIdx)
            this.MarkOption(2)
        }
    }

    protected searchAndMove(list: number[], checkIdx: number) {
        this.MarkOption()
        let check = list[checkIdx]

        this.MarkOption(2)
        let idx=checkIdx-1
        while(idx>=0) {
            if(this.needChange(list[idx], check)) {
                this.MarkOption()
                list[idx+1] = list[idx]
            } else {
                break
            }

            this.MarkOption(2)
            --idx
        }

        this.MarkOption()
        list[idx+1] = check
    }
}
