// words in paragraph
// Make a function that the total number of words repeated more than once

export const paragraph =
  "This is the life of Pi. This is life. Is it correct? I think it is correct. I would have to check first";
// above should be
// This: 1 (repeated 1 extra time)
// is: 3
// life: 1
// it: 1
// correct: 1
// I: 1
// Result = 3+1+1+1+1+1 = 8

export const getCount = (sentence) => {
  let words = paragraph.split(" ");
  console.log(words);
  const s = new Set();
  let count = 0;
  for (let w of words) {
    let temp = w.replace(/[^a-zA-Z]/g, "");
    let processed = temp.toLowerCase();
    if (!s.has(processed)) {
      s.add(processed);
    } else {
      console.log(`set already has ${processed}`);
      // we've seen it already, we can track our count
      count += 1;
    }
  }
  return count;
};

// EXO 2: file system count size
export const fileSystem = {
  home: {
    bin: 856004,
    user: { x: 64750, y: 5684 }
  },
  work: { folder: 5000 }
};
// here getSize should return 931438

// Part 1: Return a function getSize() that returns total file system size
export const getSize = (fs) => {
  if (!fs) return 0;
  let count = 0;

  function travelDown(obj) {
    if (!obj) {
      return;
    }
    if (typeof obj === "number") {
      count += obj;
      return;
    }
    for (let folder of Object.keys(obj)) {
      travelDown(obj[folder]);
    }
  }
  travelDown(fs);
  return count;
};

// Part 2: provided a specific path (that exists in our file_system)
// provide the size of the subfolders
export const paths = {
  path1: "/", //931438
  path2: "home/bin", //856004
  path3: "/home", //926438
  path4: "/home/user", //70434
  path5: "/work" //5000
};

export const getSizeForPath = (fs, path) => {
  // console.log(`Checking for path: ${path}`);
  if (path === "/") return getSize(fs);
  let split = path.split("/");
  let currentFolder = fs;
  // go down to the folder in our path
  for (let p of split) {
    if (currentFolder[p]) {
      // console.log(`We have ${p} so we go down to it`);
      currentFolder = currentFolder[p];
    }
  }
  // console.log(`Current folder: `, currentFolder);
  return getSize(currentFolder);
};
