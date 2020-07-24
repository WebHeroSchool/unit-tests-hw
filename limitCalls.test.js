const {limitCalls} =  require('./limitCalls');


describe("проверка limitsCall", ()=>{

  const fn =  limitCalls(()=>1, 2);


  test("проверка вызова  1 ",()=>{
    expect(fn()).toEqual(1)
  })
  test("проверка вызова  2 ",()=>{
    expect(fn()).toEqual(1)
  })
  test("проверка вызова  3 ",()=>{
    expect(fn()).toBeUndefined()
  })
})
