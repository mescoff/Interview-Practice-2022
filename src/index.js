import {
  fileSystem,
  getCount,
  getSize,
  getSizeForPath,
  paragraph,
  paths
} from "./datadog_interview_retry";
import { getRecoForSocialCircle } from "./opensea_interview_retry";
import { areFriends, moviesByActor } from "./zocdoc";

// Opensea
// getRecoForSocialCircle("laury", 3);

// Datadog
// console.log(getCount(paragraph));
// console.log(getSize(fileSystem));

// for (let p of Object.keys(paths)) {
//   console.log(
//     `Size for ${paths[p]} is ${getSizeForPath(fileSystem, paths[p])} `
//   );
// }

// Zocdoc
// console.log(moviesByActor());
console.log(areFriends("Angelina Jolie", "Liv Tyler", 4));
