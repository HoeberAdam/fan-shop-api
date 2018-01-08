import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        //1st call
        var promise = new Promise((resolve, reject) => {
        //2nd call
        fetch('http://localhost:3004/product')
        .then(response => {
            //4th call
            resolve(response.json());
        })
    });
        //3rd call
        return promise;
    }
}

export default HttpService;