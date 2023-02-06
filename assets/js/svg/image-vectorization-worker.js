onmessage = function (a) {
  var data = a.data;
  if (data.op === 1) {
    const response = { quant: quantize(data.opts, data.imgData) };
    postMessage(response);
  } else {
    const response = { status:'finish', svg: vectorize(data.img, data.opts,
      (status, value) =>{
        postMessage({status:status, value: value});
      }) };
    postMessage(response);
  }
};
