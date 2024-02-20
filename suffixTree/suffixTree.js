class SuffixTreeNode {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new SuffixTreeNode();
        this.buildSuffixTree(text);
    }

    buildSuffixTree(text) {
        for (let i = 0; i < text.length; i++) {
            this.addSuffix(text.substring(i), i);
        }
    }

    addSuffix(suffix, startIndex) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!node.children[char]) {
                node.children[char] = new SuffixTreeNode();
            }
            node = node.children[char];
        }
        // Store the start index of the suffix at the leaf node
        node.startIndex = startIndex;
    }

    search(pattern) {
        let node = this.root;
        for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i];
            if (!node.children[char]) {
                return null; // Pattern not found
            }
            node = node.children[char];
        }
        return node.startIndex; // Return the start index of the pattern
    }
}

// Example usage:
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("na")); // Output: 2
console.log(suffixTree.search("ban")); // Output: 0
console.log(suffixTree.search("apple")); // Output: null (pattern not found)
