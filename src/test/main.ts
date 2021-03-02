/**
 * Created by lintao_alex on 2021/3/2
 */
import {InsertionSort} from "../common/InsertionSort";
import {createRandomList, range} from "../utils/MathUtils";
import {InsertionSort2} from "../common/InsertionSort2";
import {IClass} from "../interface";
import {SortCompare} from "../common/SortCompare";
import {MergeSortLocal} from "../common/MergeSortLocal";

function isListElementMatch(list1: number[], list2: number[]){
    list1 = list1.slice()
    for(let v2 of list2) {
        let idx = list1.indexOf(v2)
        if(idx<0) return false
        list1.splice(idx, 1)
    }
    return list1.length==0
}
function unitTest(sortClass: IClass<SortCompare>) {
    console.log("unitTest: ",sortClass.name)
    let list = createRandomList(100)
    let orgList = list.slice()
    let sort = new sortClass()
    console.log("org: ",list)
    sort.sort(list)
    console.log("sorted: ",list)
    console.log("option: ",sort.optionCnt)
    console.log("isOk? ",sort.isOk(list))
    console.log("isListElementMatch? ",isListElementMatch(orgList, list))

}
function compare(...sortClassList: IClass<SortCompare>[]) {
    let max = 100000
    let dataSource = createRandomList(max,1,max)
    // let dataSource = range(1,max)
    for(let c of sortClassList) {
        let sort = new c()
        let list = dataSource.slice()
        console.time(c.name)
        sort.sort(list)
        console.timeEnd(c.name)
        console.log("isOK? ", sort.isOk(list))
        console.log("option: ",sort.optionCnt)

        console.log("")
    }
}
function main() {
    // unitTest(MergeSortLocal)
    compare(MergeSortLocal, InsertionSort2, InsertionSort)
}
main()
