mysql =require('mysql');
conn = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database:'studentdb'
})

conn.connect((err) => {
    if (err) throw err
    console.log('connected successfully')
    a = "create table patna(name varchar(50),age int(3), mail varchar(40))"
    conn.query(a, (err, res)=>
    {
        if (err) throw err
        console.log('table created')
    })
})