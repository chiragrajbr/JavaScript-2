const hackercode=(str)=>{
    const str1=str.toLowerCase()
    const obj = {a:"4",s:"5", i:"1", o:"0"}
    let result=""
    for(let i=0; i<str1.length; i++ ){
        if(obj.hasOwnProperty(str1[i])){
            result += obj[str1[i]]
        }
        else {
            result +=str[i]
        }
    }
    return result
}
console.log(hackercode("javascript is cool"))