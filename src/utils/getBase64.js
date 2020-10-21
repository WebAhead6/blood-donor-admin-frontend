function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      resolve(reader.result);
    });
    reader.readAsDataURL(file);
  });
}

export default getBase64;
