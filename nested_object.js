

const transformValue = obj => {
  for (let [key, value] of Object.entries(obj)) {
    
    if (Number.isInteger(value))
    {
      obj[key] = value + 1
    }
    else if (typeof value == 'string'){
      obj[key] = value + " AI"
    
    }
    else if (Array.isArray(value))
    {
        obj[key] = value.map(num => Number.isInteger(num) ?  num + 1 : num + " AI");
    }
    else if (typeof value === "object")
    {
       transformValue(value)
    }
  }
  
};

let obj = {
  a: 123,
  b: 'hero',
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ['abc', 'def']
  },
}

transformValue(obj)
const transformValue = obj => {
  for (let [key, value] of Object.entries(obj)) {
    
    if (Number.isInteger(value))
    {
      obj[key] = value + 1
    }
    else if (typeof value == 'string'){
      obj[key] = value + " AI"
    
    }
    else if (Array.isArray(value))
    {
        obj[key] = value.map(num => Number.isInteger(num) ?  num + 1 : num + " AI");
    }
    else if (typeof value === "object")
    {
       transformValue(value)
    }
  }
  
};

let obj = {
  a: 123,
  b: 'hero',
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ['abc', 'def']
  },
}

transformValue(obj)