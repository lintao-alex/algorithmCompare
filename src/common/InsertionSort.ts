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
        for(let i=checkIdx-1; i>=0; --i) {
            if(this.needChange(list[i], check)) {
                this.MarkOption()
                list[i+1] = list[i]
            } else {
                this.MarkOption()
                list[i+1] = check
                break
            }
            this.MarkOption(2)
        }
    }
}
