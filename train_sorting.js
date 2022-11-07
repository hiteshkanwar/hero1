const train_sort = (n, array) => {

 
 let res = []
   for (let i = 0; i< array.length - 1; i ++)
   {
       if (res.length == 0)
       {
         res.push(array[i])
       }
       else if (res[res.length - 1] > array[i])
       {
        res.push(array[i])
       }
       
        
   }
   return res
  
  
};

 train_sort(3, [10,12,4,6,3,1])

ans is 10,4,3 because 12 come after  10 and we need less weigth as per question