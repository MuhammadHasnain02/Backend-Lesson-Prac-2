// import http from 'http'

// // Define Port
// const PORT = 3000

// const server = http.createServer((req , res) => {

//     res.setHeader('Content-Type' , 'text/html')

//     if (req.url === '/') {
//         res.end(`
//             <h1>Home Page</h1>
//             <p>Welcome to Node.js Server</p>
//             <a href="/about">Go to About Page</a>
//             <a href="/contact">Go to Contact Page</a>
//         `);
//     }
//     else if (req.url === '/about') {
//         res.end(`
//             <h1>About Page</h1>
//             <p>Welcome to Node.js Server</p>
//             <a href="/">Go Back Home</a>
//         `);
//     }
//     else if (req.url === '/contact') {
//         res.end(`
//             <h1>Contact Page</h1>
//             <p>Welcome to Node.js Server</p>
//             <a href="/">Go Back Home</a>
//         `);
//     }
//     else {
//         res.end(`
//             <h1>404 Page Not Found</h1>
//             <a href="/">Go Home</a>
//         `);
//     }

//     console.log(req.url)
// })

// server.listen(PORT , () => {
//     console.log(`Server running on port ${PORT}`)
// })

// -------------------------------------------------------------

// import http from 'http'
// import fs from 'fs'

// // Define Port
// const PORT = 3000

// const server = http.createServer((req , res) => {

//     res.setHeader('Content-Type' , 'text/html')

//     if (req.url === '/') {

//         fs.readFile('./pages/HomePage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading Home Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else if (req.url === '/about') {

//         fs.readFile('./pages/AboutPage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading About Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else if (req.url === '/contact') {
        
//         fs.readFile('./pages/ContactPage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading Contact Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else {

//         res.end(`
//             <h1>404 Page Not Found</h1>
//             <a href="/">Go Home</a>
//         `);

//     }

//     console.log(req.url)
// })

// server.listen(PORT , () => {
//     console.log(`Server running on port ${PORT}`)
// })

// -------------------------------------------------------------

// import http from 'http'
// import fs from 'fs'

// // Define Port
// const PORT = 3000

// const server = http.createServer((req , res) => {

//     res.setHeader('Content-Type' , 'text/html')

//     if (req.url === '/') {

//         fs.readFile('./pages/HomePage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading Home Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else if (req.url === '/about') {

//         fs.readFile('./pages/AboutPage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading About Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else if (req.url === '/contact') {
        
//         fs.readFile('./pages/ContactPage.html' , 'utf-8' , (err , data) => {

//             if (err) {
//                 res.end('<h1>Error Loading Contact Page</h1>')
//             }
//             else {
//                 res.end(data)
//             }

//         })

//     }
//     else {

//         res.end(`
//             <h1>404 Page Not Found</h1>
//             <a href="/">Go Home</a>
//         `);

//     }

//     console.log(req.url)
// })

// server.listen(PORT , () => {
//     console.log(`Server running on port ${PORT}`)
// })

// -------------------------------------------------------------

// import http from 'http'
// import fs from 'fs'

// // Define Port
// const PORT = 3000

// const server = http.createServer((req , res) => {

//     res.setHeader('Content-Type' , 'text/html')

//     switch (req.url) {

//         case '/':
//             fs.readFile('./index.html' , 'utf-8' , (err , data) => {

//                 if (err) {
//                     res.end('<h1>Error Loading Home Page</h1>')
//                 }
//                 else {
//                     res.end(data)
//                 }

//             })
//         break

//         case '/about':
//             fs.readFile('./pages/AboutPage.html' , 'utf-8' , (err , data) => {

//                 if (err) {
//                     res.end('<h1>Error Loading About Page</h1>')
//                 }
//                 else {
//                     res.end(data)
//                 }

//             })
//         break

//         case '/contact':
//             fs.readFile('./pages/ContactPage.html' , 'utf-8' , (err , data) => {

//                 if (err) {
//                     res.end('<h1>Error Loading Contact Page</h1>')
//                 }
//                 else {
//                     res.end(data)
//                 }

//             })
//         break

//         default:
//             fs.readFile('./pages/PageNotFound.html' , 'utf-8' , (err , data) => {

//                 if (err) {
//                     res.end('<h1>Error Loading Contact Page</h1>')
//                 }
//                 else {
//                     res.end(data)
//                 }

//             })

//     }

//     console.log(req.url)
// })

// server.listen(PORT , () => {
//     console.log(`Server running on port ${PORT}`)
// })

// -------------------------------------------------------------

import http from 'http'
import fs from 'fs'

const server = http.createServer((req , res) => {

    // Base path for HTML files
    let filePath = './pages'

    // Set response header
    res.setHeader('Content-Type' , 'text/html')

    switch (req.url) {

        case '/':
            filePath += '/HomePage.html'
            res.statusCode = 200
        break

        case '/about':
            filePath += '/AboutPage.html'
            res.statusCode = 200
        break

        case '/contact':
            filePath += '/ContactPage.html'
            res.statusCode = 200
        break

        default:
            filePath += '/PageNotFound.html'
            res.statusCode = 404
    }

    // Read and send file
    fs.readFile(filePath , 'utf-8' , (err , data) => {

        if (err) {
            res.end('<h1>Internal Server Error!</h1>')
        }
        else {
            res.end(data)
        }

    })


    console.log(req.url)
})

// Define Port
const PORT = 3000

server.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})

// -------------------------------------------------------------
