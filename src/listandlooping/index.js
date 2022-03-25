const data = [
    'apple',
    'banana',
    'orange',
]

const dataObj = [
    {
        name: 'apple',
        price: 100,
    },
    {
        name: 'banana',
        price: 200,
    },
    {
        name: 'orange',
        price: 300,
    },
]

dataObj.map((data,index)=>{
    console.table(data.name)
})