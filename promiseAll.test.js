const {promiseAll} = require("./promiseAll");


describe("тестрирум промисы",()=>{
  const promise1 = new Promise(resolve=>{
    resolve(1);
  })
  const promise2 = new Promise(resolve=>{
    resolve(2);
  })
  const promiseArr = [
    promise1,
    promise2
  ]

  test('проверяем return promiseAll в валидными параметрами', async ()=>{
    const result =  await promiseAll(promiseArr)
    expect(result).toEqual([1,2])
  })
  test('проверяем return promiseAll количество', async ()=>{
    const result =  await promiseAll(promiseArr)
    expect(result).toHaveLength(2)
  })

  test('с не валидным значением', async ()=>{
    expect( promiseAll([])).rejects.toBe("empty arr")
  })
})
