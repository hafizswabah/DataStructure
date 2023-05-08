class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }

    set(key, value) {
        let index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
    get(key) {
        let index = this.hash(key)
        if (!this.table[index]) {
            return 'no such key'
        } else {

            for (let i = 0; i < this.table[index].length; i++) {

                if (this.table[index][i][0] === key) {
               return   console.log(this.table[index][i][1]);
                }
            }
        }
        
    }
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }
}
const hashTable = new HashTable()
hashTable.set("name", "swabah")
hashTable.set("name", "fasil")
hashTable.set("name", "sw")
hashTable.set("age", 19)
hashTable.set("age", 29)

console.log(hashTable.get("name"));