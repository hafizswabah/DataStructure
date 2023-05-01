public class singlyLinkedlist{
    class Node{
        int data;
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
        }
        else{
            tail.next=newNode;
        }
        tail=newNode;
    }

    public void display(){
        if(head==null){
            System.out.println("list empty");
            return;
        }
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }
    }
    public void delete(int element){
        Node temp=head;
        Node prev=null;
        if(temp!=null&&temp.data==element){
            head=temp.next;
            return;
        }
        while(temp!=null&&temp.data!=element){
            prev=temp;
            temp=temp.next;
        }
        if(temp==tail){
            tail=prev;
            tail.next=null;
            return;
        }
        prev.next=temp.next;
    }

}