class Counter {

    constructor(value = 0,min=null,max=null){
        this.value = value;
        this.max=max;
        this.min=min;

        if ((this.value<this.min) && (this.min != null))
        {
            throw new Error('il valore iniziale è minore di min');
        }
        if((this.value>this.max) && (this.max != null))
        {
            throw  new Error('il valore iniziale è maggiore di max');
        }
    }

    increment(){
       if (this.max==null){
        this.value++;
       }
       else if(this.value<this.max){
        this.value++;
    }
    }
    
    decrement(){
        if (this.max==null){
            this.value--;
           }
           else if(this.value<this.max){
            this.value--;
        }
    }
}

export default Counter;