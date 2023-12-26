const fs = require('fs')
const sumTo =require('./import.export')
// fs.writeFileSync('file_system.txt', 'This exercise about file system')

// fs.copyFileSync('file_system.txt', 'file_system.txt was copied.!');

// fs.renameSync('file_system.txt was copied.!', 'copied_file_system.txt')

// fs.readdirSync( '.', (err, files) => {
//     if (err) {
//       console.log( "Erorr");
//       return;
//     }
  
//     console.log('Files in the current directory:');
//     files.forEach(file => {
//       console.log(file);
//     });
//   });

console.log(sumTo(4));
