export function returnArrayToList(array: Array<string>, capitalise?: boolean) {
    if (capitalise) {
        const capitalizedArray = array.map(item => returnCapitalized(item.toLowerCase()) ?? '');
        return new Intl.ListFormat('en-AU', { style: 'short' }).format(capitalizedArray);
    } else return new Intl.ListFormat('en-AU', { style: 'short' }).format(array);
}

const test = [{
    name: 'Ariel',
    job: 'Developer'
},
{
    name: 'Drei',
    job: 'QA tester'
},
{
    name: 'Dan',
    job: 'Developer'
},
];

// const y = returnArrayPick<string>(test, 'name');

// returnArrayToList(y, true); >> 'Ariel, Drei and Dan'