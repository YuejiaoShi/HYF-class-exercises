- `nodemon shshsh.js` in terminal
- `const var1 = 1;
  if (true) {
    const var1 = 2;
  }` // cannot work because var1 has been defined in global, and you can accesss it here.
- but `
  if (true) {
    const var1 = 2;
  }
  const var1 = 1; `// this work. 
