import axios from "axios";

const api =axios.create({
    // baseURL:" http://localhost:8080",
    timeout:5000
})

api.interceptors.request.use(function(config){
    return config
},function(error){
    alert("报错，,重新试试")
    return Promise.reject(error)
});

api.interceptors.response.use(function(res){
    return res
},function(err){
    alert("报错，,重新试试")
    return Promise.reject(err)
})

export default api