class TrieNode{
    constructor(){
        this.children=new Map()
        this.end=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        for(let i=0;i<word.length;i++){
            this.insertSubString(i,word)
        }
    }
    insertSubString(index,word){
        let node=this.root
        for(let i=0;i<word.length-index;i++){
            let char=word[i]
            if(!node.children.has(char)){
                node.children.set(char,new TrieNode())
            }
            node=node.children.get(char)
           
        }
        node.end=true
    }
    contain(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            if(!node.children.has(word[i])){
                return false
            }else{
                node=node.children.get(word[i])
            }
        }
        return node.end
    }
    startWith(prefix){
        let node=this.root
        for(let i=0;i<prefix.length;i++){
            let char=prefix[i]
            if(!node.children.has(char)){
                return false
            }
            node=node.children.get(char)
        }
        return true
    }
}
const trie=new Trie()

trie.insert('ami')

console.log(trie.contain('amii'));