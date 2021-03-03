/**
 * Created by lintao_alex on 2021/3/3
 */
import {SortCompare} from "./SortCompare";

export class ShellSort extends SortCompare{
    protected doSort(list: number[]): void {
        this.MarkOption(2)
        for(let gap = Math.floor(list.length*0.5); gap>0; gap=Math.floor(gap*0.5)) {
            this.sortOnGap(list, gap)

            this.MarkOption(2)
        }
    }

    protected sortOnGap(list: number[], gap: number) {
        this.MarkOption(2)
        for(let i=list.length-1; i>=gap; --i) {
            this.MarkOption(2)
            let curIdx = i
            let gapShiftedIdx = i-gap

            this.MarkOption()
            while (curIdx>=0) {
                if(this.needChange(list[gapShiftedIdx], list[curIdx])) {
                    this.MarkOption(3)
                    let temp = list[curIdx]
                    list[curIdx] = list[gapShiftedIdx]
                    list[gapShiftedIdx] = temp
                }

                this.MarkOption(2)
                curIdx = gapShiftedIdx
                gapShiftedIdx -= gap

                this.MarkOption()
            }

            this.MarkOption(2)
        }
    }
}
