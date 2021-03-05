/**
 * Created by lintao_alex on 2021/3/4
 * extra rule: left child and right child should also match compare rule
 */
export abstract class HeapLeft {
    private readonly list: number[]

    constructor(dataList?: number[]) {
        this.list = []
        if(dataList && dataList.length>0) {
            for(let data of dataList) {
                this.add(data)
            }
        }
    }

    add(value: number) {
        let trgIdx = this.length
        let parentIdx = getParentIdx(trgIdx)

        while (parentIdx>=0) {
            let parent = this.list[parentIdx]
            if(isLeftIdx(trgIdx)) {
                if(this.breakRule(parent, value)) {
                    this.list[trgIdx] = parent
                } else {
                    break
                }
            } else {
                let leftIdx = trgIdx - 1
                let left = this.list[leftIdx]
                if(!this.breakRule(left, value)) {
                    break
                } else {
                    this.list[trgIdx] = left
                    if(this.breakRule(parent, value)) {
                        this.list[leftIdx] = parent
                    } else {
                        trgIdx = leftIdx
                        break
                    }
                }
            }
            trgIdx = parentIdx
            parentIdx = getParentIdx(trgIdx)
        }

        this.list[trgIdx] = value
    }

    popRoot() {
        let lastIdx = this.length-1
        if(lastIdx<0) return undefined
        if(lastIdx<2) return this.list.shift()

        let out = this.list[0]
        this.list[0] = this.list.pop() as number
        this.heapifyDown(0)

        return out
    }

    private heapifyDown(parentIdx: number) {
        console.log('in heapify:',parentIdx)
        let leftIdx = getLeftIdx(parentIdx)
        if(leftIdx>=this.length) return
        let parent = this.list[parentIdx]
        let left = this.list[leftIdx]
        if(!this.breakRule(parent, left)) return

        this.list[parentIdx] = left
        let rightIdx = getRightIdx(parentIdx)
        if (rightIdx >= this.length) {
            this.list[leftIdx] = parent
            /* if there is a single left node, it will be the only one, and it's left child must be leaf */
        } else {
            let right = this.list[rightIdx]

            if (this.breakRule(parent, right)) {
                this.list[rightIdx] = parent
                this.heapifyDown(rightIdx)
                this.list[leftIdx] = right
                this.heapifyDown(leftIdx)
            } else {
                this.list[leftIdx] = parent
                this.heapifyDown(leftIdx)
            }
        }
    }

    abstract breakRule(prev: number, next: number): boolean

    private get length() {
        return this.list.length
    }

    private get minLeafIdx() {
        return Math.floor(this.length*0.5)
    }

    private isLeafIdx(idx: number) {
        return getLeftIdx(idx)>=this.length
    }

    //test
    checkRule(idx=0) {
        let leftIdx = getLeftIdx(idx)
        if(leftIdx<this.length) {
            if(this.breakRule(this.list[idx], this.list[leftIdx])) return false
            if(!this.checkRule(leftIdx)) return false

            let rightIdx = leftIdx+1
            if(rightIdx<this.length) {
                if(this.breakRule(this.list[idx], this.list[rightIdx])) return false
                if(this.breakRule(this.list[leftIdx], this.list[rightIdx])) return false
                if(!this.checkRule(rightIdx)) return false
            }
        }
        return true
    }
}

export class MinHeap extends HeapLeft {
    breakRule(prev: number, next: number): boolean {
        return next<prev
    }
}

export class MaxHeap extends HeapLeft {
    breakRule(prev: number, next: number): boolean {
        return next>prev
    }
}

function hasParent(idx: number) {
    return idx>0
}

function getParentIdx(idx: number) {
    return Math.ceil(idx*0.5)-1
}

function getLeftIdx(idx: number) {
    return idx*2+1
}

function getRightIdx(idx: number) {
    return idx*2+2
}

function isLeftIdx(idx: number) {
    return idx%2==1
}
