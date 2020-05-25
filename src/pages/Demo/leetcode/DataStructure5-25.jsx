import React, { useEffect } from 'react';

const DataStructure = () => {
    
    const problem = () => {
        return ``
    }

    const RandomizedSet = randomizedSet();

    var randomSet = new RandomizedSet();
    console.log(randomSet.insert(1))
    console.log(randomSet.remove(2))
    console.log(randomSet.insert(2))
    console.log(randomSet.getRandom())
    console.log(randomSet.remove(1))
    console.log(randomSet.insert(2))
    console.log(randomSet.getRandom())
    return <div className='dataStructure'>   
        
        {/*language=SCSS*/}
        <style jsx>{`
            .dataStructure{

            }
        `}</style>
    </div>
}

export default DataStructure;

const randomizedSet = () => {
    /**
     * Initialize your data structure here.
     */
    var RandomizedSet = function() {
        this.list = [];
        this.map = {};
    };

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.insert = function(val) {
        if(!this.map[val]){
            this.list.push(val)
            this.map[val] = this.list.length
            return true
        }else{
            return false
        }
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    RandomizedSet.prototype.remove = function(val) {
        if(this.map[val]){
            this.list = this.list.filter(item => item != val)
            delete this.map[val]
            return true
        }else{
            return false
        }  
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    RandomizedSet.prototype.getRandom = function() {
        function randomFrom(lowerValue,upperValue){
            return Math.floor(Math.random() * (upperValue - lowerValue) + lowerValue);
        }
        console.log(this.list, randomFrom(0, this.list.length))
        return this.list[randomFrom(0, this.list.length)]
    };
 
    /**
     * Your RandomizedSet object will be instantiated and called as such:
     * var obj = new RandomizedSet()
     * var param_1 = obj.insert(val)
     * var param_2 = obj.remove(val)
     * var param_3 = obj.getRandom()
     */

     return RandomizedSet
}



