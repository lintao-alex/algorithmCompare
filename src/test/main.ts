/**
 * Created by lintao_alex on 2021/3/2
 */
import {InsertionSort} from "../common/InsertionSort";
import {createRandomList, range} from "../utils/MathUtils";
import {InsertionSort2} from "../common/InsertionSort2";
import {IClass} from "../interface";
import {SortCompare} from "../common/SortCompare";
import {MergeSortNoRecursive} from "../common/MergeSortNoRecursive";
import {MergeSort} from "../common/MergeSort";
import {isListElementMatch, isSorted} from "../utils/SortTest";

function unitTest(sortClass: IClass<SortCompare>) {
    console.log("unitTest: ",sortClass.name)
    let max = 100000
    let list = createRandomList(max,1,max)
    let orgList = list.slice()
    let sort = new sortClass()
    console.log("org: ",list)
    sort.sort(list)
    console.log("sorted: ",list)
    console.log("option: ",sort.optionCnt)
    console.log("isOk? ",isSorted(list))
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
        console.log("isOK? ", isSorted(list))
        console.log("option: ",sort.optionCnt)

        console.log("")
    }
}
function main() {
    // unitTest(MergeSort)
    compare(MergeSort, MergeSortNoRecursive)
}
main()
