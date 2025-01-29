class Person{
   
    #firstname;
    #lastname;

    constructor(firstname, lastname){
       this.#firstname = firstname;
       this.#lastname = lastname;
    }

    get firstname(){
        this.#firstname
    }

    set firstname(firstname){
        this.#firstname = firstname;
    }

    get lastname()
    {
        this.#lastname;
    }

    set lastname(lastname){
        this.#lastname = lastname;
    }

}