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
    list1 = list1.slice()
    for(let v2 of list2) {
        let idx = list1.indexOf(v2)
        if(idx<0) return false
        list1.splice(idx, 1)
    }
    return list1.length==0
}

function notGreater(a: number, b: number) {
    return a<=b
}

function notLess(a: number, b: number) {
    return a>=b
}
