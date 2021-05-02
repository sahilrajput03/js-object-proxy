let user = {
  name: 'Sahil',
  age: 22,
  study: {
    class10: 80,
    class12: 90,
  },
}

const entries = Object.entries(user)
// Similary there are Object.keys and Object.values methods too which works similarly.
console.log(entries)

// Using for each to iterate over object.

// thanks to kyle 🏉︎.
entries.forEach((element) => {
  const [key, value] = element
  console.log(key, 'has value =>', value)
})
