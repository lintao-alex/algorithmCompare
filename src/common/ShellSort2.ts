/**
 * Created by lintao_alex on 2021/3/3
 */
import {ShellSort} from "./ShellSort";

export class ShellSort2 extends ShellSort{
    protected sortOnGap(list: number[], gap: number) {
        this.MarkOption()
        let len = list.length

        this.MarkOption(2)
        for(let start=0; start<gap; ++start) {
            this.MarkOption(2)
            for(let checkIdx=start+gap; checkIdx<len; checkIdx+=gap) {
                this.MarkOption()
                let check = list[checkIdx]

                this.MarkOption(2)
                let idx=checkIdx-gap
                while(idx>=0) {
                    if(this.needChange(list[idx], check)) {
                        this.MarkOption()
                        list[idx+gap] = list[idx]
                    } else {
                        break
                    }

                    this.MarkOption(2)
                    idx-=gap
                }
                this.MarkOption()
                list[idx+gap] = check

                this.MarkOption(2)
            }

            this.MarkOption(2)
        }
    }
}
