public class doubleLinkedlist {
    class Node{
        int data;
        Node prev;
        Node next;

        Node(int data){
            this.data=data;

        }
    }


    public Node head;
    public Node tail;

    public void addNode(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=newNode;
            
        }else{
            tail.next=newNode;
            newNode.prev=tail;
        }
        tail=newNode;
    }

    public void display(){
        if(head==null){
            System.out.println("empty");
        }else{
            Node temp=head;
            while(temp!=null){
                System.out.println(temp.data);
                temp=temp.next;
            }
        }
    }

    public void delete(int element){
        Node temp=head;
        if(temp!=null&&temp.data==element){
            head=temp.next;
            return;
        }
        while(temp!=null&&temp.data!=element){
            temp.prev=temp;
            temp=temp.next;
        }
        if(temp==null){
            System.out.println("no element found");
            return;
        }
        if(temp==tail){
            tail=temp.prev;
            tail.next=null;
        }
        temp.prev.next=temp.next;
        temp.next.prev=temp.next;
    }

  

    public static void main(String[] args) {
        doubleLinkedlist list=new doubleLinkedlist();
        list.display();
        list.addNode(12);
        list.addNode(22);
        list.addNode(32);
        list.addNode(42);
        list.addNode(52);
        list.display();
        System.out.println("-------------------");
        list.delete(42);
        list.display();

    }
}


// do insertion deletion 

// reverse singly linked list