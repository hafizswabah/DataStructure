public class dui{
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

    public void addNode(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=newNode;
        }
        else{
            tail.next=newNode;
            newNode.prev=tail;
        }
        tail=newNode;
    }
    public void display(){
        if(head==null){
            System.out.println("list is empty");
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
            System.out.println("list is empty");
            return;
        }
        Node temp=tail;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.prev;
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
            System.out.println("no elements found");
            return;
        }
        if(temp==tail){
            tail=temp.prev;
            tail.next=null;
            return;
        }
        temp.prev=temp.next;
        temp=temp.next;
        
    }


    public static void main(String[] args) {
        dui list =new dui();
        list.display();

        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.addNode(40);
        list.addNode(50);
        list.addNode(60);
        list.display();
        System.out.println("=================");
        list.delete(50);
        list.display();
    }

}