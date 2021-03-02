/**
 * Created by lintao_alex on 2021/3/2
 */
export function range(start:number, end:number) {
    let out = new Array<number>()
    if(start<=end) {
        for(let i=start; i<=end; ++i) out.push(i)
    } else {
        for(let i=start; i>=end; --i) out.push(i)
    }
    return out
}
export function randomInt(min: number, max: number) {
    let seek = Math.random()*(max-min)
    return min + Math.round(seek)
}

export function createRandomList(len: number, min=1, max=100) {
    let out = new Array<number>()
    for(let i=0; i<len; ++i) {
        out.push(randomInt(min,max))
    }
    return out
}

