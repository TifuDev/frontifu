const env = process.env

class NewNotFound extends Error {
    constructor(msg){
        super(msg);
        this.name = "NoticeNotFound";
        if(msg === null)
            this.msg = "New not found!";
    }
}

class New {
    constructor(path) {
        this.path = path;
        this.api_url = "http://localhost:3000/api";
        
        if(env.API_HOST != null)
            this.api_url = `http://${env.API_HOST}:${env.API_PORT}/api`;
    }
    
    get() {
        return new Promise((resolve, reject) => {
            fetch(`${this.api_url}/new/${this.path}`)
                .then(res => {
                    if(!res.ok)
                        throw new NewNotFound();
                    return res.json();
                })
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    }
}

export {New};