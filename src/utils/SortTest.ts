/**
 * Created by lintao_alex on 2021/3/3
 */
export function isSorted(list: number[], judgeCall?: (a: number, b: number)=>boolean, callObj?: any) {
    if(!judgeCall) {
        judgeCall = list[0] <= list[list.length-1] ? notGreater : notLess
    }
    for(let i=list.length-2; i>=0; --i) {
        if(!judgeCall.call(callObj, list[i], list[i+1])) return false
    }
    return true
}

export function isListElementMatch(list1: number[], list2: number[]) {
    let map = new Map<number, number>()
    for(let v of list1) {
        let cnt = map.get(v) || 0
        map.set(v, cnt+1)
    }
    for(let v of list2) {
        if(!map.has(v)) return false
        let cnt = map.get(v) as number
        if(cnt==1) {
            map.delete(v)
        } else {
            map.set(v, cnt-1)
        }
    }
    return map.size==0
}

function notGreater(a: number, b: number) {
    return a<=b
}

function notLess(a: number, b: number) {
    return a>=b
}
