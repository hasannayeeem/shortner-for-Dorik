
const shortUrl = document.getElementById("short-url");
const longResult = document.getElementById("long-result");
const shortResult = document.getElementById("short-result");
const generateShort = document.getElementById("generate-short");
const generateLong = document.getElementById("generate-long");
const copyButton = document.getElementById("copy-button");

generateShort.addEventListener("click", function () {
  const longUrl = document.getElementById("long-url");
  const obj = {};

  const urlShortener = (longURL = "") => {
    let shortURL = "https://bit.ly/" + longURL.replace(/[^a-z]/g, "").slice(-4);
    if (!obj[shortURL]) {
      obj[shortURL] = longURL;
    }
    return shortURL;
  };

  const urlRedirector = (shortURL = "") => {
    return obj[shortURL];
  };

  const short = urlShortener(longUrl.value);
  const original = urlRedirector(short);

  longResult.value = short;
});

generateLong.addEventListener("click", function () {
  const longUrl = document.getElementById("long-url");
  const obj = {};

  const urlShortener = (longURL = "") => {
    let shortURL = "https://bit.ly/" + longURL.replace(/[^a-z]/g, "").slice(-4);
    if (!obj[shortURL]) {
      obj[shortURL] = longURL;
    }
    return shortURL;
  };

  const urlRedirector = (shortURL = "") => {
    return obj[shortURL];
  };

  const short = urlShortener(longUrl.value);
  const original = urlRedirector(short);

  if (shortUrl.value !== short) {
    alert("Incorect URL. Pleas try again.");
  } else {
    shortResult.value = original;
  }
});

function copyShortUrl() {
  // Get the text field
  let copyText = document.getElementById("long-result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function copyOriginalUrl() {
  // Get the text field
  let copyText = document.getElementById("long-url");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}