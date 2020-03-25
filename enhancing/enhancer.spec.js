const enhancer = require('./enhancer.js');
// test away!
it("should run the tests", function() {
    expect(true).toBe(true);
  });

describe('enhancer.js', function () {
    describe(".succeed()", function() {
        it("should return the item with the enhancement prop increased by one if it's < 20", function() {
            //act
        const item1 = {
            name: "item1",
            enhancement: 15,
            durability: 77
        }
        const test1 = enhancer.succeed(item1)

        const desiredAnswer = {
            name: "item1",
            enhancement: 16,
            durability: 77
        }

        //assert:
        expect(test1).toMatchObject(desiredAnswer)
        })
        it("should return the item with enhancement prop = 20 if it's === 20", function() {
            const item2 = {
                name: "item2",
                enhancement: 20,
                durability: 77
            }
            const test2 = enhancer.succeed(item2)
    
            const desiredAnswer2 = {
                name: "item2",
                enhancement: 20,
                durability: 77
            }
            expect(test2).toMatchObject(desiredAnswer2)
        })
    })
    describe(".repair()", function () {
        it("should restore the items durability to 100", function() {
            const item1 = {
                name: "item1",
                enhancement: 15,
                durability: 77
            }
            const repairTest = enhancer.repair(item1)

            const desiredAnswer = {
                name: "item1",
                enhancement: 15,
                durability: 100
            }
            expect(repairTest).toMatchObject(desiredAnswer);
        })
    })
    describe(".fail()", function() {
        it("should decease item's durability by 5 if the item's enhancement is less than 15", function() {
            const failItem = {
                name: "item2",
                enhancement: 14,
                durability: 77
            }
            const failTest = enhancer.fail(failItem)

            const desiredFailAnswer = {
                name: "item2",
                enhancement: 14,
                durability: 72
            }
            expect(failTest).toMatchObject(desiredFailAnswer);
        })
        it("should decrease item's durability by 10 if the item's enhancement is 15 or 16", function() {
            const failItem = {
                name: "item2",
                enhancement: 15,
                durability: 77
            }
            const failTest = enhancer.fail(failItem)

            const desiredFailAnswer = {
                name: "item2",
                enhancement: 15,
                durability: 67
            }
            expect(failTest).toMatchObject(desiredFailAnswer);
        })
        it("should decrease the item's enhancement level by one if its enhancement level is greater than 16 ", function() {
            const failItem = {
                name: "item2",
                enhancement: 18,
                durability: 77
            }
            const failTest = enhancer.fail(failItem)

            const desiredFailAnswer = {
                name: "item2",
                enhancement: 17,
                durability: 67
            }
            expect(failTest).toMatchObject(desiredFailAnswer);
        })
    })
})  