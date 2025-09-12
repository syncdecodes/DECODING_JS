console.log("closures - closure is function along with its lexical enviornment")

Message = "Good evening"
let hello = () => {
    console.log("hello dev " + Message) // hello dev Good evening
}
hello()


Message2 = "Good evening"
let hello2 = () => {
    Message2 = "Good morning"
    console.log("hello dev2 " + Message2) // hello dev2 Good morning
}
hello2()

Message3 = "Good evening"
let hello3 = () => {
   Message3 = "Good Morning"
    {
      Message3 = "Good Night"
        console.log(Message3) // Good Night as Message3 = "Good Night is behaving like var Message3 = "Good Night" which is globally scoped
    }
    console.log(Message3) // Good Night
}
hello3()

/* 
very Imp -:
a = 10;
It behaves like var a = 10; declared at the "global scope", even if you wrote it inside a function.

again note that let and const are block scoped
*/




Message4 = "Good evening"
let hello4 = () => {
  let Message4 = "Good Morning"
    {
     let Message4 = "Good Night"
        console.log(Message4) // Good Night as Message3 = "Good Night is now block scoped
    }
    console.log(Message4) // Good Morning
}
hello4()