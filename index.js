function checkCollection(collection) {
   return Array.isArray(collection) ? collection.slice() : Object.values(collection)
  }

  function myEach(collection,callback) {
    const newCollection = checkCollection(collection)
    for(let i=0; i<newCollection.length;i++){
       callback(newCollection[i])
    }
    return collection
  }
  

  function myMap(collection, callback){
    const newCollection = checkCollection(collection)
    const newArray = []
    for(let i=0; i<newCollection.length;i++){
      newArray.push(callback(newCollection[i]))
    }
    return newArray
  }
 
 function myReduce(collection, callback,acc){
    let newCollection = checkCollection(collection)
    if(!acc){
        acc = newCollection[0]
       newCollection = newCollection.slice(1)
    }
    for(let i=0; i<newCollection.length;i++){
      acc=callback(acc,newCollection[i])
        // acc = callback(acc+newCollection[i])
    }
    return acc
 }

 function myFind(collection, predicate){
    const newCollection = checkCollection(collection)
    for(let i=0;i<newCollection.length;i++){
        if(predicate(newCollection[i])){
            return newCollection[i]
        }
    }
 }
 function myFilter(collection, predicate){
    const newCollection = checkCollection(collection)
    const newArray = []
    for(let i=0;i<newCollection.length;i++){
        if(predicate(newCollection[i])){
           newArray.push(newCollection[i])
            
        }
    }
    return newArray
 }

 function mySize(collection){
    const newCollection = checkCollection(collection)
    return newCollection.length
 }

 function myFirst(array, n){
    // console.log(array.slice(0,n),n)
    return n===undefined ? array.slice(0,1)[0] : array.slice(0,n)
 }

 function myLast(array,n){
   return n===undefined ? array.slice(array.length-1)[0] : array.slice(-n)
 }

 function myKeys(object){
    return Object.keys(object)
 }

 function myValues(object){
    return Object.values(object)
 }










// function checkCollection(collection){
//     return Array.isArray(collection) ? collection.slice() : Object.values(collection)
// }

// function myEach(collection, callback){
//     const newCollection = checkCollection(collection)
//     for(let i=0; i<newCollection.length;i++){
//         callback(newCollection[i])
//     }
//     return collection
// }

// function myMap(collection, callback){
//     const newCollection = checkCollection(collection)
//     const newArray = []
//     for(let i=0; i<newCollection.length;i++){
//         newArray.push(callback(newCollection[i]))
//     }
//     return newArray
// }

// function myReduce(collection, callback, acc){
//     const newCollection = checkCollection(collection)
//     console.log(newCollection.slice(1))
//     // if(!acc){

//     // }
//     // for(let i=0; i<newCollection.length;i++){

//     // }
// }

