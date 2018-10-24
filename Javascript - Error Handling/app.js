let jsonString = '{ "age": 30}';


try {
    const user = JSON.parse(jsonString);
    console.log(user.age);
}
catch(err) {
    console.log(err.message);
}
finally{
    console.log("Hata olsa da olmasa da çalışacak.")
}