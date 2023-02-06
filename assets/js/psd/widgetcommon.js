const productUrl = "psd/";

document.getElementsByClassName('image-upload-wrap')[0].addEventListener(
    'dragover',
    function() {
        document.getElementsByClassName('image-upload-wrap')[0].classList.add('image-dropping');
    }
);

document.getElementsByClassName('image-upload-wrap')[0].addEventListener(
    'dragleave',
    function() {
        document.getElementsByClassName('image-upload-wrap')[0].classList.remove('image-dropping');
    }
);

function checkProgress(imgToTest) {

    if (imgToTest) {
        var loadTimer = window.setInterval(
            function() {
                if (isImageOk(imgToTest)) {
                    window.clearInterval(loadTimer);
                    document.getElementById('main-loader').style.display = 'none';
                    document.getElementById('preview-img').style.display = 'block';
                }
            },
            200
        );
    } else {
        //document.getElementById('main-loader').style.display = 'none';
    }
}

function isImageOk(img) {
    if (!img.complete) {
        return false;
    }

    if (img.naturalWidth === 0) {
        return false;
    }

    return true;
}

function downloadImg(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            blobToDataURL(blob, function(dataurl) {
                let imgContainer = document.getElementById("preview-img");
                imgContainer.src = dataurl;
            });

        })
        .catch(console.error);
}

function ReadAsDataUrl(input) {
    let reader = new FileReader();

    reader.onload = function(e) {
        setPreviewSource(e.target.result, input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
}

function blobToDataURL(blob, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
        callback(e.target.result);
    }
    reader.readAsDataURL(blob);
}

const needServerRenderFormats = ['.psd', '.psb', '.ai'];

function doWeNeedServerRender(file) {
    let fileName = file.name.toLowerCase();
    for (let i = 0; i < needServerRenderFormats.length; i++) {
        if (fileName.endsWith(needServerRenderFormats[i])) {
            return true;
        }
    }

    return false;
}

function setPreviewSource(source, fileName) {
    document.getElementsByClassName('image-upload-wrap')[0].style.display = 'none';
    //document.getElementsByClassName('file-upload-image')[0].setAttribute('src', source);
    document.getElementsByClassName('file-upload-content')[0].style.display = 'block';
    document.getElementsByClassName('image-title')[0].innerHTML = fileName;
    document.getElementById('preview-img').style.display = 'none';
    document.getElementById('main-loader').style.display = 'block';
    checkProgress(document.getElementById("preview-img"));

    var imgContainer = document.getElementById("preview-img");

    downloadImg(source);
}

function removeUpload() {
    document.getElementsByClassName("file-upload-content")[0].style.display = "none";
    document.getElementsByClassName("image-upload-wrap")[0].style.display = "block";
    //document.getElementsByClassName("download-button")[0].style.display = "none";
    document.getElementsByClassName("file-upload-btn")[0].innerHTML = "Open Image"
}

function isValidExtension(fileName) {

    let lowerFileName = fileName.toLowerCase();

    for (let i = 0; i < supportedUpload.length; i++) {
        if (lowerFileName.endsWith(supportedUpload[i])) {
            return true;
        }
    }

    return false;
};

function GetPreview(filename, folderId) {
    let url = productUrl + "conversion/api/GetPreview?" + filename + folderId;
    let previewPromise = getAsync(url);

    previewPromise.then((response) => {}).catch((response) => {
        console.error(response);
    });
}

function downloadImage() {
    let filename = window.psdUploadedFiles[0].fileName;
    let folderId = window.psdUploadedFiles[0].idUpload;
    let urlToDownload = baseUrl + productUrl + "conversion/api/GetPreview?folderId=" + folderId + "&file=" + filename;

    let pos = filename.lastIndexOf(".");
    let outputFileName = filename.substr(0, pos < 0 ? filename.length : pos) + ".jpg";

    document.downloadURI(urlToDownload, outputFileName);
}

document.downloadImage = downloadImage;

document.downloadURI = function downloadURI(url, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

function startPromiseTimer(promise, methodToDo) {
    let isPromiseResolved = false;

    promise.then((response) => {
        isPromiseResolved = true;
    }).catch((response) => {
        isPromiseResolved = true;
    });

    var localTimer = setInterval(function() {
        if (isPromiseResolved) {
            clearInterval(localTimer);
        } else {
            methodToDo();
        }
    }, 500);
}

function onFileInputChange(input, e) {
    e.preventDefault();
    if (input.files && input.files[0]) {
        let files = e.target.files;
        document.getElementsByClassName("options")[0].style.display = "none";
        document.getElementsByClassName("file-upload-btn")[0].innerHTML = "Loading";
        let needServerRender = doWeNeedServerRender(input.files[0]);

        let postFilesPromise = postFilesAsync(files);
        startPromiseTimer(postFilesPromise, () => {
            document.getElementsByClassName("file-upload-btn")[0].innerHTML += ".";
        });

        if (!needServerRender) {
            ReadAsDataUrl(input);
        }

        postFilesPromise.then((response) => {
            let responceJson = JSON.parse(response);
            let isMultipleUpload = Array.isArray(responceJson);
            if (needServerRender) {
                let filename = window.psdUploadedFiles[0].fileName;
                let folderId = window.psdUploadedFiles[0].idUpload;
                let url = baseUrl + productUrl + "conversion/api/GetPreview?folderId=" + folderId + "&file=" + filename;
                setPreviewSource(url, input.files[0].name);
                checkProgress();
            }
            document.getElementsByClassName("options")[0].style.display = "block";
            document.getElementsByClassName("file-upload-btn")[0].innerHTML = "Select another"
        }).catch((response) => {
            console.error(response);
        });
    }
}

function postFilesAsync(files) {
    if (files.length === 1) {
        var requestData = prepareRequestFilesData(files);
        return postAsync(baseUrl + productUrl + "common/api/UploadFile", requestData);
    }

    var requestData = prepareRequestFilesData(files);
    return postAsync(baseUrl + productUrl + "common/api/UploadFiles", requestData);
}

function prepareRequestFilesData(filesList) {
    var form_data = new FormData();

    for (var i = 0; i < filesList.length && i < 10; i++) {
        form_data.append('file', filesList[i]);
    }

    return form_data;
}

function postAsync(url, requestBody, contentType) {
    if (!contentType) {
        contentType = false;
    }

    return new Promise(function(succeed, fail) {
        $.ajax({
            url: url,
            data: requestBody,
            type: 'POST',
            dataType: 'text',
            cache: false,
            contentType: contentType,
            processData: false,

            success: function(response) {
                registerUpload(url, response);
                succeed(response);
            },

            error: function(response) {
                fail(response);
            }
        });
    });
}

document.getAsync = function getAsync(url, contentType) {

    if (!contentType) {
        contentType = false;
    }

    return new Promise(function(succeed, fail) {
        $.ajax({
            url: baseUrl + url,
            dataType: 'text',
            cache: false,
            contentType: contentType,
            processData: false,
            type: 'GET',
            success: function(response) {
                succeed(response);
            },
            error: function(response) {
                fail(response);
            }
        });
    });
}

function registerUpload(url, resp) {
    if (!url || url.toLowerCase().indexOf('uploadfile') < 0) {
        return;
    }

    let response = JSON.parse(resp);

    if (!window.psdUploadedFiles) {
        window.psdUploadedFiles = [];
    }

    let file = {
        idUpload: response.FolderId,
        fileName: response.FileName
    };

    if (window.psdUploadedFiles.length == 0) {
        window.psdUploadedFiles.push(file);
    } else {
        window.psdUploadedFiles[0] = file;
    }
}


fileInputs = document.getElementsByClassName("file-upload-input");

Array.prototype.forEach.call(fileInputs, function(el) {
    el.addEventListener("change", () => {
        onFileInputChange(el, event);
    })
});

removeImageBtns = document.getElementsByClassName("remove-image");
Array.prototype.forEach.call(removeImageBtns, function(el) {
    el.addEventListener("click", () => {
        removeUpload();
    })
});