 const num1=[1, 2, 3, 4, 5]

 const numred=num1.reduce((prev,item)=>{
      return  prev + item 
 },0)
  
  console.log(numred);
  
  
const num2=[1, 2, 3, 4]

const multi=num2.reduce((prev,item)=>{
     return prev * item 
})
  
  console.log(multi);
  
 const num3=[10, 5, 8, 20, 3]
 
 const biggest=num3.reduce((prev,item)=>{
     return prev >  item ? prev: item 
 },0)
  
  console.log(biggest);

  const num4=[10, 5, 8, 20, 3]

  const smallest=num4.reduce((prev,item)=>{
     return prev > item ? item: prev
  })
  
  
  console.log(smallest);
  

  const num5=[1, 2, 3, 4, 5]

  const str0=num5.reduce((prev,item)=>{
      return num5 + ""
  },0)

  console.log(str0);
  
  const num6=[{ value: 10 }, { value: 20 }, { value: 30 }]

  const sumV=num6.reduce((prev,item)=>{
     return prev + item.value
  },0)
  
  console.log(sumV);
  
  const num7=["да", "нет", "да", "нет", "да"]

  const countYES=num7.reduce((prev,item)=>{
     if(item==="да"){
       return prev+1;
     }
     return prev;
  },0)
  
   console.log(countYES);
  
  
  const num8=[1, 2, 2, 3, 4, 4, 5]

  const dub=num8.reduce((prev,item)=>{
    if(!prev.includes(item)){
      prev.push(item);
    }
    return prev;
  },[])

  console.log(dub);
  
  const num9=[1, 2, 2, 3, 3, 3, 4]

const freq = num9.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1; 
    return prev;
}, {});


console.log(freq);
  

const num10=[1, 2, 3, 4, 5]

const rev=num10.reduce((prev,item)=>{
   return[item,...prev];
},[])
  

console.log(rev);

  
 