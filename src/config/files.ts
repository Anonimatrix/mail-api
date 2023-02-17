const mb = 1;
const bytes = 1024; 

export default {
    maxSize: process.env.MAX_FILE_SIZE || mb * bytes * bytes, // 1MB
}