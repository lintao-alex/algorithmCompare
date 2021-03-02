/**
 * Created by lintao_alex on 2021/3/2
 */

export abstract class BaseCompare {
    private _optionCnt = 0

    protected MarkOption(v=1) {
        this._optionCnt+=v
    }

    get optionCnt(): number {
        return this._optionCnt;
    }
}
