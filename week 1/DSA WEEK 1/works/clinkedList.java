public class clinkedList {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
    }

    public void  display(){
        if(head==null){
            System.out.println("list is empty");
        }else{
            Node temp=head;
            while(temp!=null){
                System.out.println(temp.data);
                temp=temp.next;
            }
        }



    }

    public void deleteNode(int data){
        Node temp=head,prev=null;
        if(temp!=null && temp.data==data){
            head=temp.next;
            return;
        }
        while(temp!=null&&temp.data!=data){
            prev=temp;
            temp=temp.next;
        }
        if(temp==null){
            System.out.println("Np item find");
        }else if(temp==tail){
            tail=prev;
            tail.next=null;
        }
        else{

            prev.next=temp.next;
        }

    }


    public void insertAfter(int nextTo,int value){
        Node newNode=new Node(value);
        Node temp=head;

        while(temp!=null&&temp.data!=nextTo){
            temp=temp.next;
        }  
        if(temp==null){
           System.err.println("No value find");
        }else if(temp==tail){
            tail.next=newNode;
            tail=newNode;
        }else{
            newNode.next=temp.next;
            temp.next=newNode;

        }
    }

    public static void main(String[] args) {
        clinkedList list =new clinkedList();
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.addNode(40);
        list.addNode(50);
        list.addNode(60);
        list.addNode(70);

        list.display();

        System.out.println("deleted");

        list.deleteNode(70);
        list.display();

        System.out.println("Inserted");

        list.insertAfter(40, 100);
        list.display();
        list.insertAfter(60, 500);
        list.display();
    }

}
