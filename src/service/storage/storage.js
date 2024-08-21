// Seta um valor para algum serviço de storage, nesse caso localStorage
export function setStorage(key, data){
  return localStorage.setItem(key, data);
}
// Pega um valor de algum serviço de storage, nesse caso localStorage
export function getStorage(key){
  return localStorage.getItem(key);

}

// remove um valor de algum serviço de storage, nesse caso localStorage
export function removeStorage(key){
  return localStorage.removeItem(key);
}