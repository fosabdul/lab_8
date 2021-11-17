

// Question 2 Answers
// Property ... was accessed during render but is not defined on instance.  5 points

// What does this Vue warning message mean? 
// Property "total" was accessed during render but is not defined on instance
//  Can you safely ignore it?  Not 
// What causes it, and how do you fix it?  
// This means that you are using a property in the template that doesn’t exist in the Vue data
// Can also see this error if a v-on:click calls a method that doesn't exist, or a computed property that doesn't exist.
// Fix: define the variable – or check your spelling if you’ve already defined it.
// To fix this, we need to define a total property. It happen to me while I was calculating the total the one of you variable to lowercase which cause the total not to display properly. 




