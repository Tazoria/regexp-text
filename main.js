let str = `
010-5055-5472
thesecon@gmail.com
https://www.omdbapi.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/.{2,}/g)
)