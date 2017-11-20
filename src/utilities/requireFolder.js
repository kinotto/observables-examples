module.exports = (folderName, rx, createSubscriber) => {
    const normalizedPath = require("path").join(__dirname, '../' + folderName);
    
    require("fs").readdirSync(normalizedPath).forEach(function(file) {
      require(`../${folderName}/${file}`)(rx, createSubscriber);
    });
}