export class Authservice {
    loggin =false;
    
    isactivated(){
       const promise = new Promise(
           (resolve,reject)=>{
               setTimeout(() => {
                 resolve(this.loggin)  
               }, 800);

           }
       )
       return promise
    }

    login(){
        this.loggin=true
    }
    logout(){
        this.loggin=false
    }
}