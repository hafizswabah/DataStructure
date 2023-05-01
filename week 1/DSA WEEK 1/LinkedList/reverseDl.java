public class reverseDl {
    class Node{
        int data;
        Node next;
        Node prev;

        Node(int data){
            this.data=data;
        }

    }

    public Node head;
    public Node tail;

    public void addNode(int element){
        Node newNode=new Node(element);
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
            System.out.println("empty list");
            return;
        }
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }


    }
    public void reverse(){
        if(head==null){
            System.out.println("empty list");
            return;
        }
        Node temp=tail;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.prev;
        }
    }

    public static void main(String[] args) {
        reverseDl list=new reverseDl();
        list.display();
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.addNode(40);
        list.addNode(50);
        list.addNode(60);
        list.addNode(70);
        list.addNode(80);
        list.display();
        System.out.println("------------------------------");
        list.reverse();
    }
}
