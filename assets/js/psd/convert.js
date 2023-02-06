function convertTo(format) {
  let filesCount = window.psdUploadedFiles.length;
  let folderId = "";
  let fileName = "";
  
  for (let i = 0; i < filesCount; i++) {
    fileName += "fileName=" + window.psdUploadedFiles[i].fileName + "&";
  }
  folderId = "folderName=" + window.psdUploadedFiles[0].idUpload + "&";

  convertFile(fileName, folderId, format);
}

function convertFile(filename, folderId, outputFormat)
{
    let url = "psd/conversion/api/Convert?" + filename + folderId + "outputFormat=" + outputFormat;
    let convertPromise = document.getAsync(url);

    convertPromise.then((responseGet) => {
        let response = JSON.parse(responseGet);

        if (response.StatusCode === 200) {

          var result = response.FileName;
          let urlToDownload = baseUrl + "psd/common/api/DownloadFile?fileName=" + result;
          document.downloadURI(urlToDownload);
        }
        else {
          console.error(response);
        }
    }).catch((response) => {
        console.error(response);
    });
}

function prepareRequestFilesData(filesList) {
  var form_data = new FormData();

  for (var i = 0; i < filesList.length && i < 10; i++) {
      form_data.append('file', filesList[i]);
  }

  return form_data;
}

convertBtns = document.getElementsByClassName("file-convert-btn");

Array.prototype.forEach.call(convertBtns, function(el) {
	let toFormatAttr = el.getAttribute("convertTo");
	el.addEventListener("click", () => { convertTo(toFormatAttr); } )
});