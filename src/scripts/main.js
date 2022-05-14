/* GENERATES POST AND PAGE DATA INTO DATA FOLDER */
const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../posts")
let postlist = []

const dirPathPages = path.join(__dirname, "../pages")
let pagelist = []

const getPosts = async () => {
    fs.readdir(dirPath, (err, files) => {

        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }

        console.log(files)

        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {

                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        let metadata = lines.slice(metadataIndicies[0] + 1,
                            metadataIndicies[1])
                            metadata.forEach(line => {
                                obj[line.split(": ")[0]] = line.split(": ")[1]
                            })
                            return obj
                    }
                }
                const parseContent = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        lines = lines.slice(metadataIndicies[1] + 1,
                        lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndicies = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndicies})
                const content = parseContent({lines, metadataIndicies})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? (metadata.title).substring(0,(metadata.title).length - 1) : "No title given",
                    tag: metadata.tag ? (metadata.tag).substring(0,(metadata.tag).length - 1) : "No tag given",
                    date: metadata.date ? (metadata.date).substring(0,(metadata.date).length - 1) : "No date given",
                    content: content ? content : "No content given",                   
                }
                postlist.push(post)
                if (i === files.length - 1){
                    const sortedList = postlist.sort((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/data/posts.json", data)
                }
            })
            setTimeout(() => {
                console.log(postlist)
            }, 1000)
        })
        return
    })
}



const getPages = async () => {
    fs.readdir(dirPathPages, (err, files) => {

        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }

        console.log(files)

        files.forEach((file, i) => {
            let obj = {}
            let page
            fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
                page = {
                    content: contents
                }
                pagelist.push(page)
                    let data = JSON.stringify(pagelist)
                    fs.writeFileSync("src/data/about.json", data)
                })
            })
        })
        return
}

getPosts()
getPages()