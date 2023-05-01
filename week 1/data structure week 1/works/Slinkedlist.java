

class Slinkedlist {
    class Node{
        int data;
        Node next;

        Node(int data){
            this.data=data;
        }
    }

    public Node head=null;
    public Node tail=null;

    public void addNode(int data){

        Node newNode=new Node(data);
        if (head==null){
            head=newNode;
        }else{
            tail.next=newNode;
        }
        tail=newNode;
        System.out.println("new node added");
    }

    public void display(){
        if(head==null){
            System.out.println("List is empty");
        }
        else{
            Node temp=head;
            while(temp!=null){
                System.out.println(temp.data);
                temp=temp.next;
            }
        }
    }


    public void removeDuplicates(){
        Node current=head;
        while(current!=null){
            Node next=current.next;
            while(next!=null&& next.data==current.data&&current.data==next.data){
                next=next.next;
            }

            current.next=next;
            if(next==tail){
                tail=current;
            }

            current=next;
        }
    }

    public static void main(String[] args) {
        Slinkedlist list=new Slinkedlist();
        list.display();
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.addNode(30);
        list.addNode(30);
        list.addNode(30);
        list.addNode(40);
        list.addNode(50);
        list.addNode(50);
        list.addNode(50);
        list.addNode(60);
        list.removeDuplicates();
        list.display();
    }
}
