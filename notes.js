const notes= [
    {
        id: 1,
        subject: "objects",
        date: "January 11, 2022",
        feeling: "I am glad I know now that what I referred to as items within an object are known as key-value pairs.",
        timeSpent: "3 hours",
    },
    {
        id: 2,
        subject: "iterations",
        date: "January 11, 2022",
        feeling: "Iterations are the cycling through the ",
        timeSpent: "4 hours",
    },
]
const arrayMethods = {
    id: 3,
    subject: "array methods",
    date: "January 12, 2022",
    feeling: "Array methods modify the existing array through some sort of insertion of removal of an object inside or outside of the array.",
    timeSpent: "3 hours",
}
notes.push(arrayMethods);
const searchTerm = "iterations"
for (const note of notes) {
    if (note.subject === searchTerm)
    console.log(note)
}
