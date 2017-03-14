// TODO fix this
// had to add this addon to add correct headers to response
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en

export const request = obj => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || 'GET', obj.url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(obj.body));
  });
};
