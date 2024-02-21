mysql = require('mysql');
 conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '',
    // database: 'patna'

})

    conn.connect((error) => {
        if(error) {console.log(error)} 
        else {console.log('connected successfully')}
        conn.query('create database studentdb', (error)=>{
            if (error) throw error
            else{console.log('db created successfully')}
        })
    })

    // conn.connect(conn.query("create database knp"))

//  conn.connect()

//  console.log('connected successfully')