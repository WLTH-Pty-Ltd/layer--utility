export function returnArrayPick<T>(array: Array<any>, key: string | number) {
    return array.map((item) => item[key]) as Array<T>;
}


// const test = [{
//     name: 'Ariel',
//     job: 'Developer'
// }, {
//     name: 'Drei',
//     job: 'QA tester'
//     }];

//  returnArrayPick(test, 'name') >>> ['Ariel', 'Drei']