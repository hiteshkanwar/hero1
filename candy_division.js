
function divide_candy(n)
{
  let res = []

console.log(1111,n)


  for (let i = 0; i < n; i++)
  {
      if ( n% (i + 1) ==0 )
      {
        res.push(i)
      }
  }
  console.log(222,res)
  
  return res
  
}

divide_candy(25)