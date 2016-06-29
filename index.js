var exec = require('child_process').exec;

function convertToPDF(path, out, cb) {
    exec('libreoffice5.0 --headless --convert-to pdf:writer_pdf_Export --outdir="' + out.replace(/(.)/g, "\\$1") + '" "' + path.replace(/(.)/g, "\\$1") + '"', function (error, stdout, stderr) {
        cb(error, stdout);
    });
}

module.exports.convertToPDF = convertToPDF;
