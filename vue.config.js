module.exports = {
    devServer:{
        proxy:{
            "/users":{
                target:"http://localhost:3000",
                pathRewrite:{'^/users':'/users'},
                ws:true,
                changeOrigin: true
            }
        }
    }
}