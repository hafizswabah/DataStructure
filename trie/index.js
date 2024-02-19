

class TrieNode{
    constructor (){
        this.children=new Map()
        this.isEnd=false
    }
}


class Trie{

    constructor(){
        this.root=new TrieNode()

    }


    insert(word){

        for(let i=0;i<word.length;i++){
            this.insertSubstring(i,word) // suffix insertion first go that word and go first letter awoid then go like that
        }

    }

    insertSubstring(index,word){

        let node=this.root
        console.log(node);

        // for(let i=index;i<word.length;i++){ //suffiz

        //ameen meen een en n

        for(let i=0;i<word.length-index;i++){

            //ameen amee ame am a 
            let char=word[i]

            if(!node.children.has(char)){
                node.children.set(char,new TrieNode()) //set a char and an node
            }

            node=node.children.get(char)
            console.log(node);
        }

        node.isEnd=true

    }

    contains(word){

        let node=this.root

        for(let i=0;i<word.length;i++){
             if(!node.children.has(word[i])){
               return false
             }else{
                node=node.children.get(word[i])
             }
        }

        return node.isEnd
    }

    startsWith(prefix){
        let node= this.root

        for(let i=0;i<prefix.length;i++){
            let char=prefix[i]

            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }

        return true
    }
}


const trie=new Trie()

trie.insert('am')

console.log(trie.contains('am'));

console.log(trie.startsWith('amee'));